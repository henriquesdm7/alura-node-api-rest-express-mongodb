import autores from "./../models/Autor.js";

class AutorController {
    static listAuthors = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores);
        });
    };

    static listAuthorById = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (error, autor) => {
            if (error) {
                res.status(400).send({ message: `${error} - Id do Autor não localizado` });
            } else {
                res.status(200).send(autor);
            }
        });
    };

    static createAuthor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message} - falha ao cadastrar autor` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Autor atualizado com sucesso' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    };

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Autor removido com sucesso' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    };
}

export default AutorController;