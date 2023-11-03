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
        type: Sequelize.BLOB,
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
    kategori: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
    },
}, {
    freezeTableName: true
});
module.exports = Produk;