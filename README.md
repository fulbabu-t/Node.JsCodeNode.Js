# 🚀 Node.js Basics & Core Modules

This repository contains beginner-friendly examples of important Node.js concepts such as:

- OS Module
- Path Module
- File System (FS)
- HTTP Server
- Routing
- Asynchronous Programming
- Callback Functions
- TCP Server

Perfect for learning backend development with Node.js.

---

# 📂 Project Structure

```bash
📁 nodejs-learning
 ┣ 📄 index.js
 ┣ 📄 README.md
```

---

# ⚡ Getting Started

## 📥 Clone Repository

```bash
git clone https://github.com/your-username/nodejs-learning.git
```

## 📦 Install Node.js

Download and install Node.js from:

https://nodejs.org/

---

# ▶️ Run the Project

```bash
node index.js
```

---

# 📚 Topics Covered

---

# 1️⃣ OS Module

The OS module provides information about the operating system.

## Example

```js
const os = require('os');

console.log(os.version());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
```

## Features

- Get OS version
- Get free memory
- Get home directory
- Get system hostname

---

# 2️⃣ Path Module

The Path module helps handle file and directory paths.

## Example

```js
const path = require('path');

const filepath = 'C:\\Users\\file.txt';

console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.extname(filepath));
```

## Methods Used

| Method | Description |
|--------|-------------|
| basename() | Returns file name |
| dirname() | Returns folder path |
| extname() | Returns file extension |

---

# 3️⃣ File System Module (FS)

Used for creating, reading, updating, and deleting files.

## Create File

```js
const fs = require('fs');

fs.writeFile('Node.txt', 'This is Node js File', (err) => {
    if(err) throw err;
    console.log("File Created");
});
```

## Read File

```js
fs.readFile('Node.txt', 'utf-8', (err, data) => {
    console.log(data);
});
```

## Delete File

```js
fs.unlink('Node.txt', (err) => {
    console.log("File deleted");
});
```

---

# 4️⃣ HTTP Server

Node.js can create web servers using the HTTP module.

## Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Server Running");
});

server.listen(4000, () => {
    console.log("Server started");
});
```

## Output

```bash
http://localhost:4000
```

---

# 5️⃣ HTTP Routing

Routing allows different responses for different URLs.

## Example

```js
if(url == '/'){
   res.end("Home Page");
}
else if(url == '/contact'){
   res.end("Contact Page");
}
else{
   res.end("404 Not Found");
}
```

## Routes

| Route | Description |
|------|-------------|
| / | Home Page |
| /contact | Contact API |
| /product | Product API |

---

# 6️⃣ Asynchronous Programming

Node.js executes asynchronous operations without blocking the main thread.

## Example

```js
console.log("Program 1");

setTimeout(() => {
   console.log("Program 2");
}, 2000);

console.log("Program 3");
```

## Concepts

- Event Loop
- Non-blocking code
- Timers
- Async execution

---

# 7️⃣ Callback Functions

A callback is a function passed into another function.

## Example

```js
function Employee(name, callback){
   console.log(name);

   callback();
}

Employee("Sam", function(){
   console.log("Welcome");
});
```

---

# 8️⃣ TCP Server

TCP server communication using Node.js Net module.

## Example

```js
import net from "node:net";

const server = net.createServer();

server.listen(4000, () => {
   console.log("TCP Server Started");
});
```

---

# 🛠 Technologies Used

- Node.js
- JavaScript
- HTTP Module
- File System Module
- TCP Networking

---

# 📖 Learning Outcomes

After completing this project, you will understand:

✅ Core Node.js modules  
✅ Server creation  
✅ File handling  
✅ Routing  
✅ Asynchronous programming  
✅ Callback functions  
✅ TCP communication  

---

# 🌟 Future Improvements

- Add Express.js
- Add MongoDB
- Build REST APIs
- Authentication System
- Real-time Chat Application

---

# 🤝 Contributing

Contributions are welcome.

1. Fork repository
2. Create new branch
3. Commit changes
4. Push branch
5. Create Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Fulbabu Islam**

- 🌐 Portfolio: https://fulbabu.dev/
- 💻 GitHub: https://github.com/fulbabu-t
- 🔗 LinkedIn: https://www.linkedin.com/in/fulbabu-islam-96a9ba2ba

```
