import Book from "../models/Book.js";

export async function createBook(req, res) {
    const { title, personagemPrincipal, publishedYear } = req.body;

 
    const book = Book.build({ title, personagemPrincipal, publishedYear });


    try {
        await book.validate();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

   
    try {
        await book.save();
        res.status(201).json(book.toJSON());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getBooks(req, res) {
    const { personagemPrincipal, title, publishedYear, limit, page, order } = req.query;

    const pageLimit = parseInt(limit) || 10; 
    const pageNumber = parseInt(page) || 1; 

    let query = {}; 

    if (personagemPrincipal) query.personagemPrincipal = personagemPrincipal;
    if (title) query.title = title; 
    if (publishedYear) query.publishedYear = publishedYear;

    try {
        const books = await Book.findAll({
            where: query, 
            order: order ? [[order, 'ASC']] : undefined, 
            limit: pageLimit,
            offset: (pageNumber - 1) * pageLimit, 
        });

        if (books.length > 0) {
            res.json(books); 
        } else {
            res.status(404).json({ message: 'Nenhum livro encontrado!' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default { createBook, getBooks };
