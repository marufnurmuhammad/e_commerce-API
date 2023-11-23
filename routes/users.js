var express = require('express');
var router = express.Router();

var Users = require('../models/Users')


// router.post('/', function(req, res, next) {
//     var email = req.body.email;
//     var password = req.body.password;

//     Users.findOne({
//         where: { email: email, password: password }
//     }).then(data => {

//         if (data) {
//             res.json({
//                 status: true,
//                 pesan: "Berhasil Login",
//                 data: req.body
//             });
//         } else {
//             res.json({
//                 status: false,
//                 pesan: "Nama atau Password Salah",

//             });
//         }
//     })
// })

router.post('/', function(req, res, next) {
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
            res.json({
                status: false,
                pesan: "Nama atau Password Salah",
            });
        }
    }).catch(error => {
        res.json({
            status: false,
            pesan: "Terjadi kesalahan dalam mencari pengguna",
            error: error.message
        });
    });
});

module.exports = router;