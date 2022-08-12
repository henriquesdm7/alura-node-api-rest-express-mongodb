import Express from "express";
import LivroController from "../controllers/livrosController.js";

const router = Express.Router();

router
    .get("/livros", LivroController.listBooks)
    .get("/livros/busca", LivroController.listBooksByPublisher)
    .get("/livros/:id", LivroController.listBookById)
    .post("/livros", LivroController.createBook)
    .put("/livros/:id", LivroController.updateBook)
    .delete("/livros/:id", LivroController.deleteBook)

export default router;