import { createReadStream } from "fs";

// const createBigFile = async () => {
//   await writeFile(
//     "./src/bigfile.txt",
//     "hello world, hello world, hello world, hello world".repeat(100000)
//   );
// };

// createBigFile();

const stream = createReadStream("./src/bigfile.txt");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("finished");
});

stream.on("error", (err) => {
  console.log(err);
});
