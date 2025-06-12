const express = require('express');
const cors = require('cors');
const ConnectDB = require('./config/db')
const User = require('./models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authMiddleware');


require('dotenv').config();
ConnectDB();

const app = express();
app.use(cors({
    origin: ["https://linkedin-clone-frontend-ten.vercel.app"], // Allow requests from this origin
    methods: ["GET", "POST"],
    credentials: true, // Allow cookies to be sent with requests
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(cookieParser());

app.post("/register", (req, res) => {
    // User.create(req.body)
    const {name, email, password, role} = req.body;
    bcrypt.hash(password, 10) 
    .then(hash => {
        User.create({name, email, password: hash, role})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message));
    console.log("Saving user with role:", role);
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, 
      { httpOnly: true,
        secure: true,
        sameSite: 'None' 
       });
    res.json({ message: 'Login successful', role: user.role });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get('/verify', authenticate, (req, res) => {
//   res.json({ status: true, user: req.user });
    res.json({ status: true, user: req.user });
});

app.get('/logout', (req, res) => {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    });
    res.json({ message: 'Logged out successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});