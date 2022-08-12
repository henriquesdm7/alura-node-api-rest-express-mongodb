import Express from "express";
import AutorController from "../controllers/autoresController.js";

const router = Express.Router();

router
    .get("/autores", AutorController.listAuthors)
    .get("/autores/:id", AutorController.listAuthorById)
    .post("/autores", AutorController.createAuthor)
    .put("/autores/:id", AutorController.updateAuthor)
    .delete("/autores/:id", AutorController.deleteAuthor)

export default router;