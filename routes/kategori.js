const express = require('express');
const router = express.Router();

var Kategori = require('../models/Kategori');

/* TAMPIL DATA */
router.get('/tampil', function(req, res, next) {
    Kategori.findAll().then(data => {
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
})

router.get('/tampil/:id_kategori', function(req, res, next) {
    const id_kategori = req.params.id_kategori;

    Kategori.findByPk(id_kategori).then(data => {
        if (data) {
            res.json({
                status: true,
                pesan: "Berhasil Tampil",
                data: data
            });
        } else {
            res.json({
                status: false,
                pesan: "Kategori tidak ditemukan",
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