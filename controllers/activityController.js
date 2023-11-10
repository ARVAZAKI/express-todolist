const db = require('../configs/db')

const getData = (req, res) => {
    const sql = 'SELECT * FROM activities'
        db.query(sql, (err,result) => {
            const aktivitas = JSON.parse(JSON.stringify(result))
            res.render('index', {aktivitas: aktivitas})
        })
}
const createData = (req, res) => {
    const sql = `INSERT INTO activities (activity) VALUE ('${req.body.activity}')`
    db.query(sql, (err,result) => {
        res.redirect('/')
    })
}
const updateData = (req, res) => {
    let id = req.params.id
    const sql = `UPDATE activities SET activity = '${req.body.activity}' WHERE id = ` + id
    db.query(sql, (err, result) => {
        res.redirect('/')
    })

}
const deleteData = (req, res) => {
    let id = req.params.id
    const sql = `DELETE FROM activities WHERE id = ` + id
    db.query(sql, (err,result) => {
        if(err) throw err
        res.redirect('/')
    })
}
module.exports = {
    getData,
    createData,
    deleteData,
    updateData
}
