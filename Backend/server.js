const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'VARDHAN',
  database: process.env.DB_NAME || 'newdb'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Signup Endpoint
app.post('/api/signup', (req, res) => {
  const { fullName, email, password } = req.body;
  const query = 'INSERT INTO users (FullName, Email, Password) VALUES (?, ?, ?)';
  db.query(query, [fullName, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Signup failed' });
    } else {
      res.status(200).json({ message: 'Signup successful', userId: result.insertId });
    }
  });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE Email = ? AND Password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying data:', err);
      res.status(500).json({ error: 'Login failed' });
    } else if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

// Submit Feedback Endpoint
app.post('/api/submit-feedback', (req, res) => {
  const { facultyName, difficulty, rating, feedback } = req.body;
  const query = 'INSERT INTO Feedback (FacultyName, Difficulty, Rating, FeedbackText) VALUES (?, ?, ?, ?)';
  db.query(query, [facultyName, difficulty, rating, feedback], (err, result) => {
    if (err) {
      console.error('Error inserting feedback:', err);
      res.status(500).json({ error: 'Failed to submit feedback' });
    } else {
      res.status(200).json({ message: 'Feedback submitted successfully', feedbackId: result.insertId });
    }
  });
});

// Get Feedback for a Faculty Endpoint
app.get('/api/view-feedback/:facultyName', (req, res) => {
  const { facultyName } = req.params;
  const query = 'SELECT Difficulty, Rating, FeedbackText, SubmittedAt FROM Feedback WHERE FacultyName = ?';
  db.query(query, [facultyName], (err, results) => {
    if (err) {
      console.error('Error fetching feedback:', err);
      res.status(500).json({ error: 'Failed to fetch feedback' });
    } else {
      res.status(200).json({ feedback: results });
    }
  });
});

// Submit Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, feedback } = req.body;
  const query = 'INSERT INTO Contact (Name, Email, Feedback) VALUES (?, ?, ?)';
  db.query(query, [name, email, feedback], (err, result) => {
    if (err) {
      console.error('Error inserting contact data:', err);
      res.status(500).json({ error: 'Failed to submit contact form' });
    } else {
      res.status(200).json({ message: 'Contact form submitted successfully', contactId: result.insertId });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});