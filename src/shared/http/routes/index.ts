import { Router } from 'express';

const routes = Router();

routes.get('/', (resquest, response) => {
  return response.json({ message: 'hellowe' });
});

export default routes;
