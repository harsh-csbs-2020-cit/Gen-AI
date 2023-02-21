app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }
  
    // Compare the password hash with the user's input
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }
  
    // Generate a JWT and return it to the client
    const token = jwt.sign({ userId: user._id }, 'secretKey');
    res.json({ success: true, token });
  });
  