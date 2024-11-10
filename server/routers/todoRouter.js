import { Router } from 'express';

import { getTasks, postTask, deleteTaskController } from '../controllers/TaskController.js';

const todoRouter = Router();

todoRouter.get('/', getTasks);
todoRouter.post('/create', postTask);
todoRouter.delete('/delete/:id', deleteTaskController);

export default todoRouter;