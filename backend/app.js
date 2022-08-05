var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session')

var indexRouter = require('./routes/index');
var produtosRouter = require('./routes/produtos');
var produtoRouter = require('./routes/produto');
var contaRouter = require('./routes/conta');
var carrinhoRouter = require('./routes/carrinho');
var adminRouter = require('./routes/admin');
var contatoRouter = require('./routes/contato');



// var usersRouter = require('./routes/users');
// var blogRouter = require('./routes/blog');
// var dogwalkerRouter = require('./routes/dogwalker');
// var dogwalkerRouter = require('./routes/dogwalker2');
// var contatoRouter = require('./routes/contato');
// var cachorroRouter = require('./routes/cachorro');
// var registroRouter = require('./routes/registro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'devEngers', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 } }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/produtos', produtosRouter);
app.use('/produto', produtoRouter);
app.use('/minhaconta', contaRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/contato', contatoRouter);

// produtos (listas)
// produto (podutos individuais (ver, adicionar e editar))
// minhaconta (dados do cliente, registro do usuario)
// carrinho (carrinho)



// app.use('/users', usersRouter);
// app.use('/blog', blogRouter);
// app.use('/dogwalker', dogwalkerRouter);
// app.use('/contato', contatoRouter);
// app.use('/cachorro', cachorroRouter);
// app.use('/dogwalker2', dogwalkerRouter);
// app.use('/contato', contatoRouter);
// app.use('/registro', registroRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
