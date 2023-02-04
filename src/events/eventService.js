var eventModel = require('./eventModel');

module.exports.createEventDBService = (eventDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var eventModelData = new eventModel();

       eventModelData.title = eventDetails.title;
       eventModelData.description = eventDetails.description;
       eventModelData.from = eventDetails.from;
       eventModelData.createdDate = eventDetails.createdDate;
       eventModelData.duration = eventDetails.duration;
       eventModelData.imageEvent=eventDetails.imageEvent
       eventModelData.postalcode = eventDetails.postalcode;
      
      console.log("eventModelData"+eventModelData.title)
      eventModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}
module.exports.getEventService = (eventIdDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      eventModel.find({ postalcode: eventIdDetails.postalcode},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
              
               var data=JSON.stringify(result)
               const dataArray = JSON.parse(data);
              
               for (const element of dataArray) {
                  console.log(element);
                }
               resolve({status: true,msg: dataArray});
            }
            else
            {
               reject({status: false,msg: "No data"});
            }

         }
      
      });
      
   });
}