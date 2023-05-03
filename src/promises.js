import { readFile } from "fs";
import { promisify } from "util";

const readFilePromise = promisify(readFile);

const read = async () => {
  try {
    const result = await readFilePromise("./text.txt", "utf-8");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
