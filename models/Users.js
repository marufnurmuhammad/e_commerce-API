var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Users = koneksi.define('Pengguna', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_pengguna: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
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

}, {
    freezeTableName: true
});
module.exports = Users;