const path = require("path");

const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.join('/olena', '/music'));
// console.log(path.resolve('/olena', '/films'));

// console.log(path.join(__dirname, "/olena", "/music"));

const todosPath = path.join(__dirname, "..", "db", "todos.json");

console.log(todosPath);

class FileOperations {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async create(data) {
    try {
      return await fs.writeFile(this.filePath, JSON.stringify(data, null, 4));
    } catch (error) {
      console.log(error.message);
    }
  }

  async read() {
    return await fs.readFile(this.filePath, "utf-8");
  }
  update() {}

  async remove() {
    try {
      return await fs.unlink(this.filePath);
    } catch (error) {
      console.log(error.message);
    }
  }

  async display() {
    console.log(await this.read());
  }
}

const file = new FileOperations(todosPath);

// file.display()
// file.create(data);
// file.remove();
const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

function asyncHandler(callback) {
  try {
    return callback;
  } catch (error) {
    console.log(error.message);
  }
}

asyncHandler(file.display());

// asyncHandler(file.remove());

// asyncHandler(file.create(data));