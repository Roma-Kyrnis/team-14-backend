import { Router } from 'express';

import points from './points.mjs';

const router = new Router();

router.use('/points', points);

export default router;
