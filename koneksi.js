const { Sequelize } = require("sequelize");

const koneksiDB = new Sequelize('e_commerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {

        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

try {
    koneksiDB.authenticate();
    console.log('Koneksi Berhasil.');

} catch (error) {
    console.error('Koneksi Gagal :', error);

}
module.exports = koneksiDB