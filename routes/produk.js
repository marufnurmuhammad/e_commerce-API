var express = require('express');
var router = express.Router();
var cekToken = require("../middleware");
var Produk = require('../models/Produk')




/* TAMPIL DATA */
router.get('/tampil', cekToken, function(req, res, next) {
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

//tampil terbabru berdasarkan created_At
router.get('/terbaru', cekToken, function(req, res, next) {
    Produk.findAll({
        order: [
            ['created_at', 'DESC']
        ],
        limit: 5,
    }).then(data => {
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

//Tampil by Id
router.get('/tampil/:id_produk', cekToken, function(req, res, next) {
    const id_produk = req.params.id_produk;

    Produk.findByPk(id_produk).then(data => {
        if (data) {
            res.json({
                status: true,
                pesan: "Berhasil Tampil",
                data: data
            });
        } else {
            res.json({
                status: false,
                pesan: "Produk tidak ditemukan",
                data: null
            });
        }
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Tampil: " + err.message,
            data: null
        });
    });
})

module.exports = router;