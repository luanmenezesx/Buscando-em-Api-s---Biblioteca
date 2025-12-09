import Author from "../models/Author.js";

export async function createAuthor(req, res) {
    const { name, country, age } = req.body; 

    const author = Author.build({ name, country, age });

    try {
        await author.validate();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    try {
        await author.save(); 
        res.status(201).json(author.toJSON()); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getAuthors(req, res) {
    const { name, country, age, order } = req.query; 

    let query = {}; 

   
    if (name) query.name = name;
    if (country) query.country = country;
    if (age) query.age = age;

    try {
        const authors = await Author.findAll({
            where: query, 
            order: order ? [[order, 'ASC']] : undefined,  
        });

        if (authors.length > 0) {
            res.json(authors); 
        } else {
            res.status(404).json({ message: 'Nenhum autor encontrado!' }); 
        }
    } catch (error) {
        res.status(500).json({ message: 'Não foi possível buscar os autores!' }); 
    }
}
export default { createAuthor, getAuthors };
