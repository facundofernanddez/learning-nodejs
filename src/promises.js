import fs from "fs";

const read = async () => {
  try {
    const result = await fs.readFile("./text.txt");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
