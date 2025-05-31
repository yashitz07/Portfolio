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

// Set view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render('index');
});

app.get("/connect", (req, res) => {
  res.render('connect');
});

app.get("/achievement", (req, res) => {
  res.render('achievement');
});

app.get("/projects", (req, res) => {
  res.render('projects');
});

app.get("/education", (req, res) => {
  res.render('education');
});

app.get("/header", (req, res) => {
  res.render('partials/header');
});

app.get("/footer", (req, res) => {
  res.render('partials/footer');
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    WebappURL: process.env.WebappURL || 'https://your-vercel-site.vercel.app'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
