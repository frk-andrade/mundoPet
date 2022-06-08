const controller = {
  index: (req, res) => res.render('dogwalker2', { title: "dogwalker2" }),
  show: (req, res) => res.render('post', { title: "Post" })
}

module.exports = controller;