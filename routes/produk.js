var express = require('express');
var router = express.Router();

var Produk = require('../models/Produk')

/* TAMPIL DATA */
router.get('/tampil', function(req, res, next) {
    Produk.findAll().then(data => {
        res.json({
            status: true,
            pesan: "Berhasil Tampil",
            data: data
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Tampil: " + err.message,
            data: []
        });
    });
});

module.exports = r