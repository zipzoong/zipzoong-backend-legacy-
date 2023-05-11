import { Backend } from "@APP";
import { Configuration } from "@INFRA/config";
import { DynamicExecutor } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { createWriteStream } from "fs";
import path from "path";
import stripAnsi from "strip-ansi";
import { internal } from "./internal";

const logger = createWriteStream(path.join(__dirname, "./../../test_log.md"), {
  flags: "w"
});

const write = process.stdout.write.bind(process.stdout);

process.stdout.write = (str: string) => {
  logger.write(stripAnsi(str));
  return write(str);
};

console.log("# Test Report");
logger.write("\n<details open>\n<summary>detail test case</summary>\n\n");

async function run(): Promise<void> {
  const app = await Backend.start({ logger: false });

  const connection: IConnection = {
    host: `http://localhost:${Configuration.PORT}`
  };

  await internal.seed(connection);

  internal.mock();

  const report = await DynamicExecutor.validate({
    prefix: "test",
    parameters: () => [connection]
  })(__dirname + "/features");

  await internal.truncate();

  await Backend.end(app);

  const executions = report.executions.filter((line) => line.error !== null);

  logger.write("\n</details>\n");

  if (executions.length === 0) {
    write("\n\x1b[32mAll Tests Passed\x1b[0m\n");
    logger.write("\n$`\\color{#00FF00}\\text{All Tests Passed}`$\n");

    write(`\nTest Count: \x1b[36m${report.executions.length}\x1b[0m\n`);
    logger.write(
      "\nTest Count: $`\\color{#00ffff}\\text{" +
        `${report.executions.length}` +
        "}`$\n"
    );

    write(
      `\nTotal Test Time: \x1b[33m${report.time.toLocaleString()}\x1b[0mms\n`
    );
    logger.write(
      "\nTotal Test Time: $`\\color{#ffff00}\\text{" +
        `${report.time.toLocaleString()}` +
        "}`$\n"
    );
  } else {
    write(`\n\x1b[31m${executions.length} Tests have Failed\x1b[0m\n`);
    logger.write(
      "\n$`\\color{#ff0000}\\text{" +
        `${executions.length}` +
        " Tests have Failed}`$\n"
    );
    for (const { location, name, error } of executions) {
      console.log("\n\x1b[33m--- Location ---\x1b[0m");
      console.log(location);
      console.log("\n\x1b[34m--- Function Name ---\x1b[0m");
      console.log(name);
      console.log(`\n\x1b[32m--- Error ---\x1b[0m`);
      console.error(error);
    }
  }
}

run()
  .catch((err) => {
    console.error(err);
    process.exit(-1);
  })
  .finally(() => {
    logger.end();
  });
