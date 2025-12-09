import Genre from "../models/Genre.js";  

export async function createGenre(req, res) {
    const { type, country, creationdate } = req.body;  

    const genre = Genre.build({ type, country, creationdate });  

    try {
        await genre.validate();  
    } catch (error) {
        return res.status(400).json({ message: error.message });  
    }

    try {
        await genre.save();  
        res.status(201).json(genre.toJSON()); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getGenres(req, res) {
    const { type, country, creationdate, order } = req.query; 

    let query = {}; 

    if (type) query.type = type;
    if (country) query.country = country;
    if (creationdate) query.creationdate = creationdate;

    try {
        const genres = await Genre.findAll({
            where: query, 
            order: order ? [[order, 'ASC']] : undefined,  
        });
            console.log("lenght generos" + genres.length)
        if (genres.length > 0) {
            res.json(genres);
        } else {
            res.status(404).json({ message: 'Nenhum gênero encontrado!' }); 
        }
    } catch (error) {
        res.status(500).json({ message: 'Não foi possível buscar os gêneros!' }); 
    }
}

export default { createGenre, getGenres }; 
