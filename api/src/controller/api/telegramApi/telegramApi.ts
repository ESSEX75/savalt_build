import express from 'express';
import { telegramServices } from '../../../services';

const router = express.Router();

router.post('/api/telegram', telegramServices);

export default router;
