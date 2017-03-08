 (() => {
    /**
     *  Dependencies.
    */
    const dotenv = require('dotenv');
    const express = require('express');
    const logger = require('morgan');
    dotenv.config();

    /**
     * Create Express server.
     */
    const app = express();
    app.use(logger('dev'));
    app.set('port', process.env.PORT || 3000);

    /**
     * Start Express server.
     */
    app.listen(app.get('port'), function () {     
        console.log('App is running at http://localhost:%d', app.get('port'));
        console.log('  Press CTRL-C to stop\n');
    });

    module.exports = app;
 })(); 
