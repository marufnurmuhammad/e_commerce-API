var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Users = koneksi.define('User', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    alamat: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    no_hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true
});
module.exports = Users;