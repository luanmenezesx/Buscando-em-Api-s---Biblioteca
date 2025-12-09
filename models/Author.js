import { Sequelize } from "sequelize";
import db from '../db.js';

const Author = db.define('author', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
});

export default Author;
