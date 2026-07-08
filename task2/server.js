// const express = require('express');

// const app = express();

// app.post('/', (req, res) => {
//     res.json({ message: 'hi sanjeev',
//         name: 'sanjeev',
//         age: 25,
//         city: 'delhi'

//         });
// });
// app.get('/home', (req, res) => {
//     res.send('hi sanjeev its home page');

// });
// app.get('/about', (req, res) => {
//     res.send('hi sanjeev its about page ');
// });
// app.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });



const express = require("express");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "..", "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});