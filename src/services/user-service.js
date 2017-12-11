module.exports = function (app, models) {
    app.get('/allUsers', getUserList);
    app.get('/findUser', findUserById);
    app.post('/addUser', addUser);

    function findUserById(req, res) {
        console.log(req.query.id);
        models.userModel.findUserById(req.query.id)
        .then(user => res.json(user), err => res.send(err));
    }

    function getUserList(req, res) {
        models.userModel.getUserList()
        .then(users => res.json(users), err => res.send(err));
    }

    function addUser(req, res) {
        let reqUser = req.body;
        let user = {};
        user.name = reqUser.firstName + ' ' + reqUser.lastName;
        user.address = reqUser.address;
        user.typeDescription = reqUser.type;
        user.campusName = reqUser.campus;
        
        models.campusModel.findCampusIDByName(user.campusName)
        .then(campusId => {
            user.campusId = campusId[0].campus_id;
            models.userParkingTypeModel.findUserTypeByDescription(user.typeDescription)
            .then(userType => {
                user.type = userType[0].user_type;
                models.userModel.addUser(user)
                .then(result => res.sendStatus(200), err => res.send(err));
            });
        });
        
    }
}