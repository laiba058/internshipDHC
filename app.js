// Import required packages
const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

// Initialize Express app
const app = express();
app.use(express.json()); // to parse JSON requests
app.use(helmet());       // for setting secure HTTP headers

// Dummy in-memory user database
const users = [];

// Register route (user signup)
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Validate email
  if (!validator.isEmail(email)) {
    return res.status(400).send('Invalid email format');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user
  users.push({ email, password: hashedPassword });

  res.status(201).send('User registered successfully');
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send('Invalid credentials');

  // Generate JWT token
  const token = jwt.sign({ email: user.email }, 'your-secret-key');
  res.send({ message: 'Login successful', token });
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Secure server running on http://localhost:${PORT}`);
});
