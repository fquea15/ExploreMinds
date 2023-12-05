import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Service Users'));
router.get('/ping', (req, res) => res.send('pong User'));

export default router;