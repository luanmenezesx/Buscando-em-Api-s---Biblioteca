import { Sequelize } from 'sequelize';
import db from '../db.js';

const Book = db.define('book', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    personagemPrincipal: { 
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    publishedYear: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
});

export default Book;
