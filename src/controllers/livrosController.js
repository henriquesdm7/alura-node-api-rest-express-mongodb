import livros from "./../models/Livro.js";

class LivroController {
    static listBooks = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((error, livros) => {
                res.status(200).json(livros);
            });
    };

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    static listBooksByPublisher = (req, res) => {
        const publisher = req.query.editora;

        livros.find({ editora: publisher }, {}, (error, livros) => {
            res.status(200).send(livros);
        });
    };

    static listBookById = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((error, livro) => {
                if (error) {
                    res.status(400).send({ message: `${error} - Id do livro não localizado` });
                } else {
                    res.status(200).send(livro);
                }
            });
    };

    static createBook = (req, res) => {
        let livro = new livros(req.body);
        livro.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message} - falha ao cadastrar livro` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static updateBook = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Livro atualizado com sucesso' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    };

    static deleteBook = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Livro removido com sucesso' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    };
}

export default LivroController;