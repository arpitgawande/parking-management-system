module.exports = function(app, models) {
    app.get('/userTypeList', getUserTypeList);

    function getUserTypeList(req, res) {
        models.userParkingTypeModel.getUserTypeList()
        .then(userTypeList => {
            if(userTypeList != []) {
                res.json(userTypeList);
            } else {
                res.sendStatus(404);
            }
        }, err => { res.send(err) });
    }
};