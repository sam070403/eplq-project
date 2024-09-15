import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js'; // Importing error handler

export const verifyToken = (req, res, next) => {
  // Access token from cookies
  const token = req.cookies.access_token;
  
  // If token is missing
  if (!token) {
    return next(errorHandler(401, 'Unauthorized: No token provided'));
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized: Invalid or expired token'));
    }

    // Token is valid, attach user info to req.user
    req.user = user;
    next();
  });
};

// Function to check if the user is an admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return next(errorHandler(403, 'Forbidden: Access denied, admin only'));
    }
  });
};
