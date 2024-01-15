import { program } from "commander";
import { creatFile, getFiles, getFileInfo } from "./files.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-f, --fileName <type>", "enter file name")
  .option("-c, --content <type>", "enter content");

program.parse();

const options = program.opts();

async function invokeAction({ action, fileName, content }) {
  switch (action) {
    case "create":
      creatFile(fileName, content);
      break;

    case "getFiles":
      getFiles();
      break;

    case "getFileInfo":
      getFileInfo(fileName);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
