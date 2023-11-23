const express = require('express');
const router = express.Router();
var Pesanan = require('../models/Pesanan');
var Users = require('../models/Users');
var cekToken = require('../middleware');

/* TAMPIL DATA */
router.get('/tampil', cekToken, function(req, res, next) {
    Pesanan.findAll({
        include: [{
            model: Users,
            as: 'pengguna',
            attributes: ['nama_pengguna'],
        }, ],
    }).then(data => {
        const modifiedData = data.map(item => {
            return {
                id_pesanan: item.id_pesanan,
                nama_pengguna: item.pengguna ? item.pengguna.nama_pengguna : null,
                tanggal_pesan: item.tanggal_pesan,
                status: item.status,
                // Ambil nama_pengguna dari relasi
            };
        });
        res.json({
            status: true,
            pesan: "Berhasil Tampil",
            data: modifiedData,
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Tampil: " + err.message,
            data: []
        });
    });
})

module.exports = router;