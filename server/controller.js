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
    },
    addHouse: (req,res) => {
        const db = req.app.get('db')
        const {name,address,city,state,zip} = req.body
        db.add_house([name,address,city,state,zip]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something is broken with add')
        })
    }
}