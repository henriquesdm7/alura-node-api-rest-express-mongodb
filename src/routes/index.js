import Express from "express";
import autores from "./autoresRoutes.js";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Curso de Node' });
    })

    app.use(
        Express.json(),
        livros,
        autores
    );
};

export default routes;