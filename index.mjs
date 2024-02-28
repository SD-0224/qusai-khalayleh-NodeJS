import { readFromFile, countWords } from "./utils.mjs";

const { files } = JSON.parse(await readFromFile("./config.json"));

const filesPrmoises = [];

for (const file of files) {
  filesPrmoises.push(readFromFile(file));
}

const filesResult = await Promise.allSettled(filesPrmoises);

for (let i = 0; i < filesResult.length; i++) {
  const isFulfilled = filesResult[i].status === "fulfilled";
  const text = filesResult[i].value;

  // Check if the file exists and the reading is fulfilled
  if (isFulfilled && text !== undefined) {
    const wordsCount = text ? countWords(text) : 0;

    console.log(`${files[i]}: ${wordsCount}`);
  }
}
