const express = require('express');
const Sequelize = require('sequelize');
const Pesanan = koneksi.define('pesanan', {
    id_pesanan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

})