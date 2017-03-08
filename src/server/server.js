(() => {
    const app = require('./app');
    const path = require("path");
    const fs = require("fs");

    //resole api handlers
    var normalizedPath = path.join(__dirname, "api");
    var apiHandlers = fs.readdirSync(normalizedPath);
    apiHandlers.forEach(function (handler) {
        require("./api/" + handler);
    });

    /**
   * Start Express server.
   */
    app.listen(app.get('port'), function () {
        console.log('App is running at http://localhost:%d', app.get('port'));
        console.log('  Press CTRL-C to stop\n');
    });

    app.get('/', (req, res) => {
        res.send("Use api/{my-message} to call the api.");
    });
})();