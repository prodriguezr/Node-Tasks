import { Router } from 'express';
import { RootCtrlr } from '../controllers';

const router = Router();

router.get('/', RootCtrlr.getRoot);

export default router;