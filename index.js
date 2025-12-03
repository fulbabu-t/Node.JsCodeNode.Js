// console.log("Hello Welcome to Node js");

// ====================== OS MODULE ======================

// const os = require('os');
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());

// ====================== PATH MODULE ======================

// const path = require('path');
// const filepath = 'C:\\Users\\sachi\\OneDrive\\Desktop\\Krutanic\\Full-Stack Web Development\\MERN-Stack\\JavaScript\\01-introduction\\introduction.txt';
// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));
// console.log(path.extname(filepath));

// ====================== FILE SYSTEM ======================

// const fs = require('fs');  // file system

// fs.writeFile('Node.txt', 'This is Node js File along with data', (err) => {
//     if (err) throw new Error(err);
//     console.log("File Created Successfully");
// });

// fs.readFile('Node.txt', 'utf-8', (err, data) => {
//     if (err) throw new Error(err);
//     console.log(data);
// });

// fs.writeFile('Node.txt', '\n This is next line data', (err) => {
//     if (err) throw new Error(err);
//     console.log("File Updated Successfully");
// });

// fs.readFile('Node.txt', 'utf-8', (err, data) => {
//     if (err) throw new Error(err);
//     console.log(data);
// });

// fs.unlink('Node.txt', (err) => {
//     if (err) throw new Error(err);
//     console.log("File deleted");
// });


// ====================== HTTP SERVER ======================

//  const http = require('http');
// const PORT = 4000;

// const server = http.createServer((req, res) => {
//     console.log("Server Starts");
//     res.end("The Data is running in Node js server");
//     console.log("Server Ended");
// });


// server.listen(PORT, () => {
//     console.log(`Port is running at http://localhost:4000/`);
// });

// ====================== HTTP SERVER WITH ROUTING ======================

// const http = require('http');
// const { json } = require('stream/consumers');

// const server = http.createServer((req, res) => {
//   // console.log(`Hello ${req.url}`);
//   const url = req.url;

//   const contact_data = {
//     phone: '1234567890',
//     email: 'abc@gmail.com'
//   };

//   if (url == '/' || url == '/home') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.end('<h1>Welcome to Home Page</h1>');
//   } else if (url == '/contact') {
//     res.writeHead(200, { 'content-type': 'application/json' });
//     res.end(JSON.stringify(contact_data));
//   } else if (url == '/product') {
//     res.writeHead(200, { 'content-type': 'application/json' });
//     res.end(JSON.stringify({
//       message: 'Product List',
//       items: ['Laptop', 'Mobile', 'Headphone']
//     }));
//   } else {
//     res.writeHead(404, { 'content-type': 'text/plain' });
//     res.end('404 Page not found');
//   }
// });

// server.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000/");
// });


// ====================== ASYNCHRONOUS PROGRAMMING ======================


// console.log("Programme 1");
// setTimeout(()=>{
//     console.log("Programme 2");
// },2000) // 2s
// setTimeout(()=>{
//     console.log("Programme 3");
// },0) // 0s
// setTimeout(()=>{
//     console.log("Programme 4");
// })
// console.log("Programme 5");

// Callback => is a function is called in another function as a parameter

// function Student(name){
//     // console.log(name);
//     console.log(`Hello ${name}`);
// }
// Student('Raghu k')
// Student('Vamshi')
// Student("Vinay")

// function Employee(ename, callback) {
//     console.log("Starts");

//     setTimeout(() => {
//         console.log(`Hello ${ename}`);
//     }, 2000)

//     setTimeout(() => {
//         callback()
//     },3000)

//     console.log("End");
// }
// Employee('Samrudhi', function () {
//     console.log("Welcome to the Tutor");
// })


// ====================== TCP Server ======================

// import net from "node:net";

// const server = net.createServer();

// server.listen(4000, "0.0.0.0", () => {
//   console.log("Server started on port 4000");
// });

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//     socket.write("HTTP\n\nGot your message.");
//     socket.end();
//   });
//   socket.on("close", () => {
//     console.log(socket.remoteAddress, ": Client disconnected");
//   });
//   console.log("Client Connected", socket.remoteAddress);
// });


// server.on("listening", () => {
//   console.log("Server started on port 4000");
// });
