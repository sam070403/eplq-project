import Admin from '../models/Admin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';

// Define upload storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Admin Register
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // 1. Validate the input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 2. Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 3. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // 5. Save the user to the database
    await newUser.save();

    // 6. Respond with success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle any errors
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin Login
export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password || username === '' || password === '') {
      return next(errorHandler(400, 'All fields are required'));
  }
  try {
      const validUser = await User.findOne({ username });
      if (!validUser) {
          return next(errorHandler(400, 'User not found'));
      }
      const validPass = bcryptjs.compareSync(password, validUser.password);
      if (!validPass) {
          return next(errorHandler(400, 'Invalid Password'));
      }
      const token = jwt.sign(
          { id: validUser._id,isAdmin: validUser.isAdmin },
         'samyak'
      );

      const { password: pass, ...rest } = validUser._doc;

    res
    .status(200)
    .cookie('access_token', token, {
      httpOnly: true,
    })
    .json(rest);
  } catch (error) {
      return next(errorHandler(500, error.message));
  }
}

// Admin Upload Data
export const uploadData = async (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'File upload failed' });
    }
    // Process the uploaded file
    res.status(200).json({ message: 'File uploaded successfully' });
  });
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
      const user = await User.findOne({ email });
      if (user) {
          const token = jwt.sign(
              { id: user._id, isAdmin: user.isAdmin },
              'samyak'
          );
          const { password, ...rest } = user._doc;
        res
        .status(200)
        .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
      } else {
          const generatedPassword =
              Math.random().toString(36).slice(-8) +
              Math.random().toString(36).slice(-8);
          const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
          const newUser = new User({
              username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
              email,
              password: hashedPassword,
              profilePicture: googlePhotoUrl,
          });
          await newUser.save();
          const token = jwt.sign(
            { id: newUser._id, isAdmin: newUser.isAdmin },
            'samyak'
          );
          const { password, ...rest } = newUser._doc;
          res
            .status(200)
            .cookie('access_token', token, {
              httpOnly: true,
            })
            .json(rest);
      }
  } catch (error) {
      next(error);
  }
};


