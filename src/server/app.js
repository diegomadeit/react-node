(() => {
    /**
     *  Dependencies.
    */
    const dotenv = require('dotenv');
    const express = require('express');
    const logger = require('morgan');

    /**
     * Load global configuration.
     */
    dotenv.config();

    /**
    * Create Express server.
    */
    const app = express();
    app.use(logger('dev'));
    app.set('port', process.env.PORT || 3000);

    module.exports = app;
})(); 
