var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Produk = koneksi.define('Produk', {
    id_produk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_produk: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gambar: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    harga_produk: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    deskripsi: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stok: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    kategori: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    freezeTableName: true
});
module.exports = Produk;