var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Users = require('./Users');

const Pesanan = koneksi.define('pesanan', {
    id_pesanan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_pengguna: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tanggal_pesan: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    freezeTableName: true,
});

Pesanan.belongsTo(
    Users, { foreignKey: 'id_pengguna', as: 'pengguna' }
);

module.exports = Pesanan;