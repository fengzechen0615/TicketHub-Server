const userRoutes = require('./users');
const ticketRoutes = require('./tickets');
const commentRoutes = require('./comments');
const placeRoutes = require('./places');
const bankRoutes = require('./banks');
const friendRoutes = require('./friends');
const express = require('express');

const constructorMethod = (app) => {
    app.use('/users', userRoutes);
    app.use('/tickets', ticketRoutes);
    app.use('/comments', commentRoutes);
    app.use('/places', placeRoutes);
    app.use('/banks', bankRoutes);
    app.use('/friends', friendRoutes);

    app.use(express.static('public'));

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'page not found' });
    });
};

module.exports = constructorMethod;
