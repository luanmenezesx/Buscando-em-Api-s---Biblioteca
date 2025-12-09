import { Sequelize } from 'sequelize';
import db from '../db.js';

const Genre = db.define('genre', {
    type: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    creationdate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

export default Genre;
