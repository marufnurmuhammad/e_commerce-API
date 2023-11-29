var express = require('express');
var router = express.Router();

var Users = require('../models/Users');
const { post } = require('.');




router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    Users.findOne({
        where: { email: email, password: password }
    }).then(user => {
        if (user) {
            const userData = {
                nama: user.nama_pengguna,
                email: user.email,
                alamat: user.alamat,
                nomorhp: user.no_hp
            };

            res.json({
                status: true,
                pesan: "Berhasil Login",
                data: userData
            });
        } else {
            res.status(400).json({
                status: false,
                pesan: "Email atau Password Salah",
            });
        }
    }).catch(error => {
        res.status(400).json({
            status: false,
            pesan: "Terjadi kesalahan dalam mencari pengguna",
            error: error.message
        });
    });
});


router.post('/add', function(req, res, next) {
    Users.create(req.body).then(data => {
            res.json({
                status: true,
                pesan: "Berhasil Tambah User",
                data: data
            });
        })
        .catch(err => {
            res.status(400).json({
                status: false,
                pesan: "Gagal Tambah: " + err.message,
                data: []
            });
        });
})

module.exports = router;