import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); 
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
  res.render(path.join(__dirname,'views', 'index.ejs'));
});
app.get("/connect", (req, res) => {
  res.render(path.join(__dirname,'views', 'connect.ejs'));
});

app.get("/achievement", (req, res) => {
  res.render(path.join(__dirname,'views', 'achievement.ejs'));
});

app.get("/projects", (req, res) => {
  res.render(path.join(__dirname,'views', 'projects.ejs'));
});

app.get("/education", (req, res) => {
  res.render(path.join(__dirname,'views', 'education.ejs'));
});

app.get("/header", (req, res) => {
  res.render(path.join(__dirname,'views','partials', 'header.ejs'));
});

app.get("/footer", (req, res) => {
  res.render(path.join(__dirname,'views','partials', 'footer.ejs'));
});

app.post('/submit', (req, res) => {
  // Handle the form submission here
  const { name, email, message } = req.body;

  // Process the form data, e.g., save to the database or send an email

  // Respond with a success message (JSON or HTML depending on your needs)
  res.json({ message: 'Form submitted successfully' });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    WebappURL: process.env.WebappURL
  });
});

  // Start the server
  app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on http://localhost:${port}`);
  });
