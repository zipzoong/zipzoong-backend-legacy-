import crypto from "crypto";

export namespace Crypto {
  const IV_LEN = 12;
  const TAG_LEN = 16;

  /**
   * @param plain valiable plain string
   * @param key 32 byte string
   * @return encrypted string
   */
  export const encrypt = ({
    plain,
    key
  }: {
    plain: string;
    key: string | Buffer;
  }): string => {
    const iv = crypto.randomBytes(IV_LEN);
    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv, {
      authTagLength: TAG_LEN
    });
    const encrypted =
      cipher.update(plain, "utf8", "base64") + cipher.final("base64");
    const tag = cipher.getAuthTag();

    return `${iv.toString("base64")}.${tag.toString("base64")}.${encrypted}`;
  };
  /**
   *
   * @param token generated by {@link encrypt} function
   * @param key 32 byte string
   * @return plain string
   */
  export const decrypt = ({
    token,
    key
  }: {
    token: string;
    key: string | Buffer;
  }): string => {
    const [iv, tag, encrypted] = token.split(".");
    if (iv === undefined || tag === undefined || encrypted === undefined) {
      throw Error("Invalid Token String");
    }
    const decipher = crypto
      .createDecipheriv("aes-256-gcm", key, Buffer.from(iv, "base64"))
      .setAuthTag(Buffer.from(tag, "base64"));

    return (
      decipher.update(encrypted, "base64", "utf8") + decipher.final("utf8")
    );
  };
}
