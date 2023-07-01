import express from 'express';
import authentication from '../middleware/authentication';
import createFilmController from '../app/controllers/CreateFilmController';
import findFilmController from '../app/controllers/FindFilmController';
import deleteFilmController from '../app/controllers/DeleteFilmController';
import updateFilmController from '../app/controllers/UpdateFilmController';

const routes = express.Router();

routes.post('/films', authentication, createFilmController.createFilm);
routes.get('/films', authentication, findFilmController.findFilm);
routes.get('/films/:id', authentication, findFilmController.findFilmForId);
routes.get('/films/title/:deTitle', authentication, findFilmController.findFilmByName);
routes.delete('/films/:id', authentication, deleteFilmController.deleteFilm);
routes.put('/films', authentication, updateFilmController.updateFilm);

export default routes;

