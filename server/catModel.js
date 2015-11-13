/**
 * Created by CliffEby on 9/18/2015.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    categoryTitle: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    categoryId: {
        type: Number
    }
});


/**
 * User Schema
 */
var UserSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        trim: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    displayName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        default: '',
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        unique: 'Username already exists',
        required: 'Please fill in a username',
        trim: true
    },
    password: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Category', CategorySchema);
mongoose.model('User', UserSchema);
