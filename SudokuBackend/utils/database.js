import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sudokudb', 'root', 'csc2053', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;