import fs from "fs/promises";
import path from "path";
import chalk from "chalk";
import dataValidate from "./helpers/dataValidator.js";
import checkExtension from "./helpers/checkExtension.js";

const log = console.log;
const folderPath = path.resolve("./files");

export const creatFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };

  const { error } = dataValidate(file);

  if (error) {
    log(
      chalk.bgRed(
        `Please, specify ${error.details[0].path[0]} param. It is required!`
      )
    );
    return;
  }

  const { extension, result } = checkExtension(fileName);
  if (!result) {
    log(
      chalk.bgRed(
        `Sorry this app doesn't support file with ${extension} extension`
      )
    );
    return;
  }
  const filePath = path.resolve("./files", fileName);
  try {
    await fs.writeFile(filePath, content, "utf-8");
    log(chalk.green("Created successfully"));
  } catch (error) {
    console.log(error);
  }
};

export const getFiles = async () => {
  try {
    const files = await fs.readdir(folderPath);
    if (!files.length) {
      log(chalk.bgRed("Folder hasn't files"));
      return;
    }
    files.forEach((el) => console.log(el));
  } catch (error) {
    console.log(error);
  }
};

export const getFileInfo = async (fileName) => {
  try {
    const files = await fs.readdir(folderPath);
    const fileTrueName = files.find((file) => file === fileName);
    if (!fileTrueName) {
      log(chalk.bgRed(`File ${fileName} not found`));
      return;
    }
    const filePath = path.resolve("./files", fileName);
    const fileText = await fs.readFile(filePath, "utf-8");
    console.log(fileText);
  } catch (error) {
    console.log(error);
  }
};
