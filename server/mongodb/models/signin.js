import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3000;

// Set up MongoDB connection and create user model

app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Save the new user to the database
  try {
    const user = await User.create({ username, email, password: hashedPassword });
    res.json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));
