const controller = {
    index: (req, res) => res.send("Blog"),
    show: (req, res) => res.send(`POST ${req.params.id}`)
}

module.exports = controller;