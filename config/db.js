#!/usr/bin/env node

module.exports = {
    mongo: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME ,
    }
};
