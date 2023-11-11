import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import { createPoint, deletePoint, getAllPoints, getPoint, updatePoint } from '../controller.mjs';
import {
  createPointSchema,
  deletePointSchema,
  getPointSchema,
  updatePointSchema,
} from '../schemas.mjs';

const router = new Router();
const validator = createValidator();

router.post('/', validator.body(createPointSchema), createPoint);
router.get('/', getAllPoints);
router.get('/:id', validator.params(getPointSchema), getPoint);
router.patch('/', validator.body(updatePointSchema), updatePoint);
router.delete('/:id', validator.params(deletePointSchema), deletePoint);

export default router;
