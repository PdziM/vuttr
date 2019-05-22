import Router from 'express';
import validate from 'express-validation';
import handle from 'express-async-handler';
import path from 'path';

/* All Controllers */
import controllers from './app/controllers';

/* All Validators */
import validators from './app/validators';

/* Middlewares */
import authMiddleware from './app/middlewares/auth';

const routes = Router();

/* Check */
routes.get('/', (req, res) => res.status(200).json({ API: 'Vuttr', Version: '0.0.1' }));

/* Docs */
routes.get('/docs', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'docs', 'index.html')));

/* Users Create */
routes.post('/users', validate(validators.User), handle(controllers.UserController.store));

/* Session */
routes.post('/sessions', validate(validators.Session), handle(controllers.SessionController.store));

routes.use(authMiddleware);

/* Tools */
routes.get('/tools', handle(controllers.ToolsController.index));
routes.get('/tools/:id', handle(controllers.ToolsController.show));
routes.post('/tools', validate(validators.Tool), handle(controllers.ToolsController.store));
routes.put('/tools/:id', handle(controllers.ToolsController.update));
routes.delete('/tools/:id', handle(controllers.ToolsController.destroy));

export default routes;
