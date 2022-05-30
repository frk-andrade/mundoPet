const controller = {
  index: (req, res) => res.render('dogwalker', { title: "Dogwalker" }),
  show: (req, res) => res.render('post', { title: "Post" })
}

module.exports = controller;