import { Router } from 'express';
import { TasksCtrlr } from '../controllers';

const router = Router();

router.get('/', TasksCtrlr.getTasks);

export default router;