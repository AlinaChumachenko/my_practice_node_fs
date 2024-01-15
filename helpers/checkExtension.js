const checkExtension = (fileName) => {
  const EXTENSION = ["doc", "jpeg", "svg", "tsx", "jsx"];
  const parts = fileName.toLowerCase().split(".");
  const extension = parts[parts.length - 1];
  return {
    extension,
    result: EXTENSION.includes(extension),
  };
};
// checkExtension("file.docx");

export default checkExtension;
