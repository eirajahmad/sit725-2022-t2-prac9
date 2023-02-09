//to get data from backend
var findBuddyService = require('./findbuddyService');

var sendBuddy = async (req, res) => 
{
    try
    {
    console.log("requessssssssssssssssssss");
        //check the data receive
    console.log("dataaaaaaaaaaaaaa", req.body); 
    console.log(req.body);
    var status = await findBuddyService.createFindBuddyDBService(req.body);
    console.log(status);


    if (status) {
        res.send({ "status": true, "message": "Find buddy created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating find buddy" });
    }
}
catch(err)
{
    console.log(err);
}
}

var deleteFindBuddy = async (req, res) => {
    var result = null;
    try {
        result = await findBuddyService.deleteFindBuddyService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var updateFindBuddy = async (req, res) => 
{
    var result = null;
    try {
        result = await findBuddyService.updateFindBuddyService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var getBuddy = async (req, res) => {
    var result = null;
    try {
        result = await findBuddyService.getFindBuddyService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}
module.exports = { sendBuddy, getBuddy,deleteFindBuddy,updateFindBuddy };

