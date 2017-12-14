module.exports = function (app, models) {
    app.post('/buyPermit', buyPermit);

    function buyPermit(req, res) {
        console.log(req.body);
        models.permitModel.buyPermit(req.body.id)
        .then(response => res.json(response), err => res.send(err));
    }
}
