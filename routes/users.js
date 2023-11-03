var express = require('express');
var router = express.Router();

var Users = require('../models/Users')


router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    Users.findOne({
        where: { username: username, password: password }
    }).then(data => {

        if (data) {
            res.json({
                status: true,
                pesan: "Berhasil Login",
                data: req.body
            });
        } else {
            res.json({
                status: false,
                pesan: "Nama atau Password Salah",

            });
        }
    })
})

module.exports = router;