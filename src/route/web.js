import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    // rest api
    router.get('/hoidanit', (req, res) => {
        return res.send('Hello world with Thold1')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;