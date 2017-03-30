(() => {
    const app = require('../app');
    const soap = require('soap');

    app.get('/api/permissiveaction', function (req, res) {
        res.send('Hello from API v1 permissive action handler.');

        var url = process.env.QUERY_ENDPOINT_URL;
        var args = { name: 'value' };
        soap.createClient(url, function (err, client) {
            client.Execute(args, function (err, result) {
                if (err) {
                    console.error(err);
                }
                console.log(result);
            });
        });
    });
})();