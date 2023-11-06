var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Pesanan = require('./Pesanan');
const Produk = require('./Produk');
const DetailPesanan = koneksi.define('detail_pesanan', {
        id_detail_pesanan: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        id_pesanan: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_produk: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        kuantitas: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        subtotal: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },


    }, {
        freezeTableName: true,
    }

);
DetailPesanan.belongsTo(
        Pesanan, { foreignKey: 'id_pesanan', as: 'pesanan' }
    ),

    DetailPesanan.belongsTo(
        Produk, { foreignKey: 'id_produk', as: 'produk' }
    )

module.exports = DetailPesanan;