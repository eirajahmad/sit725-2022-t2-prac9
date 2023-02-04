//to get data from backend
var eventService = require('./eventService');

var sendEvent = async (req, res) => 
{
    try
    {
    console.log("requessssssssssssssssssss");
        //check the data receive
    console.log("dataaaaaaaaaaaaaa", req.body); 
    console.log(req.body);
    var status = await eventService.createEventDBService(req.body);
    console.log(status);


    if (status) {
        res.send({ "status": true, "message": "Event created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating event" });
    }
}
catch(err)
{
    console.log(err);
}
}

var getEvent = async (req, res) => {
    var result = null;
    try {
        result = await eventService.getEventService(req.body);
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

module.exports = { sendEvent, getEvent };

