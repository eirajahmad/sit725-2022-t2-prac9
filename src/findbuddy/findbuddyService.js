var findbuddyModel = require('./findbuddyModel');

module.exports.createFindBuddyDBService = (findBuddyDetails) => {


   return new Promise(function myFn(resolve, reject) {
     
       var findbuddyModelData = new findbuddyModel();

       findbuddyModelData.title = findBuddyDetails.title;
       findbuddyModelData.description = findBuddyDetails.description;
       findbuddyModelData.from = findBuddyDetails.from;
       findbuddyModelData.createdDate = findBuddyDetails.createdDate;
       findbuddyModelData.postalcode = findBuddyDetails.postalcode;
      
      console.log("findbuddyModelData"+findbuddyModelData.title)
      findbuddyModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}
module.exports.getFindBuddyService = (findBuddyIdDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      findbuddyModel.find({ postalcode: findBuddyIdDetails.postalcode},function getresult(errorvalue, result)
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
               resolve({status: true,msg: "data is there"});
            }
            else
            {
               reject({status: false,msg: "Invaild Employee Detailssss"});
            }

         }
      
      });
      
   });
}
