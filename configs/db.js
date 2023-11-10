const mysql = require('mysql')
const koneksi = mysql.createConnection({
    host: 'localhost',
    database: 'todoexp',
    user: 'root',
    password: ''
})
koneksi.connect()
module.exports = koneksi