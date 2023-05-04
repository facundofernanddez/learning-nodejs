import { writeFile } from "fs/promises";

const createBigFile = async () => {
  await writeFile(
    "./src/bigfile.txt",
    "hello world, hello world, hello world, hello world".repeat(100000)
  );
};

createBigFile();
