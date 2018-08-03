module.exports = {
    getHouses: (req,res) => {
        const db = req.app.get('db')
        db.get_houses().then(response => {
            res.status(200).send(response)
            // console.log(get_houses)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something is broken')
        })
    }
}