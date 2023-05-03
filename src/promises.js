import { readFile } from "fs/promises";

const read = async () => {
  try {
    const result = await readFile("./text.txt", "utf-8");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
