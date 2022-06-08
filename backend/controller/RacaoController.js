const controller = {
    index: (req, res) => res.render('categoria-racao', {title: "Ração"}),
    show: (req,res) => res.render('racao-cachorro', {title:" Ração para cachorro"})
};

module.exports = controller;