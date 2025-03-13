const fs = require("fs");

fs.readFile("./fileModule/sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:\n", data);
});

console.log("Reading file asynchronously...");
