#!/usr/bin/env node

var configs = {};


configs.mongo = {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
};

configs.server = {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || '8000'
};

module.exports = configs;
