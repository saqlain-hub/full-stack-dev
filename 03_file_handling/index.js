const fsPromises = require("fs").promises;
const path = require("path");

// promises on fs module

const fileOps = async () => {
  try {
    // const data = await fsPromises.readFile(
    //   path.join(__dirname, "files", "starter.txt"),
    //   "utf8"
    // );
    // console.log(data);
    // await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    const data = "Hello my name is saqlain";
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseRename.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseRename.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
