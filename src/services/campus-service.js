module.exports = function (app, models) {
    app.get('/campuses', getCampusList);

    function getCampusList(req, res) {
        models.campusModel.getCampusList()
            .then(function (campusList) {
                if (campusList != []) {
                    res.json(campusList);
                } else {
                    res.sendStatus(404);
                }
            }, function (err) {
                res.send(err);
            });
    }
};