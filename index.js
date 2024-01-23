import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from "pg";
import path from 'path';
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.get("/achievement", (req, res) => {
  res.render("achievement.ejs");
});

// document.addEventListener("DOMContentLoaded", function () {
//   var mobileMenuIcon = document.getElementById("mobile-menu-icon");
//   var headerNavigation = document.querySelector(".header_navigation");

//   mobileMenuIcon.addEventListener("click", function () {
//     headerNavigation.classList.toggle("show-mobile-menu");
//   });
// });


















app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "user_data",
  password: "database@2604",
  port: 5432,
});
db.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
  
    const query = 'INSERT INTO data (name, email, message) VALUES ($1, $2, $3)';
    const values = [name, email, message];
  
      // Use the connected client to execute the query
      db.query(query, values, (error, result) => {
          if (error) {
              console.error('Error executing query', error);
              res.status(500).send('Error inserting data');
          } else {
              console.log('Data inserted successfully');
              res.status(200).send('Data inserted successfully');
          }
      });
  });
  // Start the server
  app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
  });