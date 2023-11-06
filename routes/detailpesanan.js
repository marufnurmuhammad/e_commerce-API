const express = require('express');
const router = express.Router();
var DetailPesanan = require('../models/DetailPesanan');
var Pesanan = require('../models/Pesanan');
var Produk = require('../models/Produk');

/* TAMPIL DATA */
router.get('/tampil', function(req, res, next) {
    DetailPesanan.findAll({
        include: [{
                model: Pesanan,
                as: 'pesanan',
                attributes: ['tanggal_pesan', 'status'],
            },
            {
                model: Produk,
                as: 'produk',
                attributes: ['nama_produk'],
            },
        ],
    }).then(data => {
        const modifiedData = data.map(item => {
            return {
                id_pesanan: item.id_pesanan,
                tanggal_pesan: item.pesanan.tanggal_pesan,
                status: item.pesanan.status,
                id_produk: item.id_produk,
                nama_produk: item.produk.nama_produk,
                subtotal: item.kuantitas * item.subtotal,
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