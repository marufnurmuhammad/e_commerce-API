var express = require('express');
var router = express.Router();

var Users = require('../models/Users');
const { post } = require('.');
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/login', async function(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({
            where: { email: email }
        });

        if (user) {
            // Compare the provided password with the hashed password stored in the database
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
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
        } else {
            res.status(400).json({
                status: false,
                pesan: "Email atau Password Salah",
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            pesan: "Terjadi kesalahan dalam proses login",
            error: error.message
        });
    }
});

router.post('/add', async function(req, res, next) {
    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        // Replace the plain text password with the hashed one
        const userObject = {
            ...req.body,
            password: hashedPassword
        };

        const data = await Users.create(userObject);

        res.json({
            status: true,
            pesan: "Berhasil Tambah User",
            data: data
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            pesan: "Gagal Tambah: " + err.message,
            data: []
        });
    }
});


module.exports = router;