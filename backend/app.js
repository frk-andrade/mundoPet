const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session')

const indexRouter = require('./routes/index')
const produtosRouter = require('./routes/produtos')
const produtoRouter = require('./routes/produto')
const contaRouter = require('./routes/conta')
const carrinhoRouter = require('./routes/carrinho')
const adminRouter = require('./routes/admin')
const loginRouter = require('./routes/login')


const app = express();

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
app.use('/login', loginRouter);



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
