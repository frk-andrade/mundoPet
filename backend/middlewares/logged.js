const admin = async (req, res, next) => {

    let isLogged = req.session.id_usuario
    if (!isLogged) {
        res.redirect('/login')
        return
    }
  
    next()
    
    return
  }
  
  module.exports = admin