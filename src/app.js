import Express from "express";

const app = Express();

const livros = [
    {
        id: 1,
        titulo: "Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

app.use(Express.json());

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Curso de Node');
});

app.get('/livros', (req, res) => {
    res
        .status(200)
        .json(livros);
});

app.get('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);
    res.json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);

    res
        .status(201)
        .send('Livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = searchBook(id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = searchBook(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`)
});


function searchBook(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app;