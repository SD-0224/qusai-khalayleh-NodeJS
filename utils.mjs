import { readFile } from "fs/promises";

export const readFromFile = async (filePath) => {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    console.log(`${filePath}: doesn't exist.`);
  }
};

export const countWords = (text) => {
  // Split on non-word characters
  const words = text.split(/\W+/);
  // Filter out words containing only digits
  return words.filter((word) => !/^\d+$/.test(word)).length;
};
