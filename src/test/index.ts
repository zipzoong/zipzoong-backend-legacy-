import { Backend } from "@APP";
import { Configuration } from "@INFRA/config";
import { DynamicExecutor } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { createWriteStream } from "fs";
import path from "path";
import stripAnsi from "strip-ansi";
import { internal } from "./internal";
import { sens } from "./mocks/sens/sens.application";

const logger = createWriteStream(path.join(__dirname, "./../../test_log.md"), {
  flags: "w"
});

const write = process.stdout.write.bind(process.stdout);

process.stdout.write = (str: string) => {
  logger.write(stripAnsi(str));
  return write(str);
};

async function test(connection: IConnection): Promise<-1 | 0> {
  const report = await DynamicExecutor.validate({
    prefix: "test",
    parameters: () => [connection]
  })(__dirname + "/features");

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
        "}`$ms\n"
    );
    return 0;
  } else {
    write(`\n\x1b[31m${executions.length} Tests have Failed\x1b[0m\n`);
    logger.write(
      "\n$`\\color{#ff0000}\\text{" +
        `${executions.length}` +
        " Tests have Failed}`$\n"
    );
    const hashmap = new Map<string, { name: string; error: Error | null }[]>();
    executions.forEach(({ location, name, error }) => {
      const data = { name, error };

      hashmap.get(location)?.push(data) ?? hashmap.set(location, [data]);
    });

    hashmap.forEach((list, location) => {
      console.log(
        "\n\x1b[33mLocation:\x1b[0m " + location.split("/features")[1]
      );
      list.forEach(({ name, error }) => {
        console.log("\n- \x1b[34mFunction:\x1b[0m " + name);
        console.log();
        console.log(error);
      });
    });
    return -1;
  }
}

async function run(): Promise<void> {
  const app = await Backend.start({ logger: ["error"] });
  const connection: IConnection = {
    host: `http://localhost:${Configuration.PORT}`
  };

  const sens_app = await sens(); // naver sens mocking server

  await internal.seed(connection);

  internal.mock();

  console.log("# Test Report");
  logger.write("\n<details>\n<summary>detail test case</summary>\n\n");

  const state = await test(connection).catch((err) => {
    console.log(err);
    return -1 as const;
  });

  logger.end();

  await internal.truncate();

  await Backend.end(app);

  await sens_app.close();

  process.exit(state);
}

run().catch((err) => {
  console.log(err);
  process.exit(-1);
});
