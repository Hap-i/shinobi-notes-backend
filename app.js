const express = require('express');
const morgan = require('morgan');
const noteRouter = require('./routes/noteRoutes')
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Middleware
// Third party Middkeware  --> this shows the proper req made in log
app.use(morgan('dev'));

// this middleware helps us to get req body
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1/notes', noteRouter);


// Unhandled Routes 404
app.all('*', (req, res, next) => {
    next(new AppError(`Invalid Path (${req.originalUrl})`, 404));
});

// Global error handling Middleware
app.use(globalErrorHandler);

module.exports = app