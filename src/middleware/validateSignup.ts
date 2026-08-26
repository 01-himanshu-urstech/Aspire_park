// middleware/validateSignup.ts

import { NextApiRequest, NextApiResponse } from 'next';

export const validateSignup = (req: NextApiRequest, res: NextApiResponse, next: () => void): void => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  next();
};
