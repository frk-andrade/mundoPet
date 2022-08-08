const admin = async (req, res, next) => {

    let isAdmin = req.session.admin
    if (!isAdmin || isAdmin == false) {
        res.redirect('/login')
        return
    }
  
    next()
    
    return
  }
  
  module.exports = admin