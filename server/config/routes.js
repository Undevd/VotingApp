var votes = require('../controllers/votes');

module.exports = function(app) {
    
    // Vote routes
    app.post('/api/votes', votes.createVote);
    app.get('/api/votes', votes.getVotes);

    //Default routes
    app.get('/partials/*', function(req, res) {
        console.log(req.params);
        res.render('../../public/app/' + req.params[0]);
    });

    app.all('/api/*', function(req, res) {
        res.sendStatus(404);
    });

    app.get('*', function(req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
}