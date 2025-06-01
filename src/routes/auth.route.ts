
import express, { Request, Response } from 'express';
import { login } from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  try {
    await login(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;