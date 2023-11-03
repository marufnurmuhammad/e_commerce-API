var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Kategori = koneksi.define('Kategori', {
    id_kategori: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_kategori: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    foto_kategori: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    freezeTableName: true
});
module.exports = Kategori;