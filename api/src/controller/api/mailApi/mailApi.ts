import express from 'express';
import { emailServices } from '../../../services';

const router = express.Router();

router.post('/api/sendmail', emailServices);

export default router;
