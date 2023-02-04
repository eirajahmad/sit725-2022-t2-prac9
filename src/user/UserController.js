//to get data from backend
var userService = require('./userService');

var createUserControllerFn = async (req, res) => 
{
    try
    {
    console.log("requessssssssssssssssssss");
        //check the data receive
    console.log("dataaaaaaaaaaaaaa", req.body); 
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);


    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg,"data":result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { createUserControllerFn, loginUserControllerFn };

