(() => {
    const app = require('../app');

    app.get('/api/permissiveaction', function (req, res) {
        res.send('Hello from APIv1 permissive action route.');
    });
})();