//to get data from front end
const title = document.getElementById('title');
const description = document.getElementById('description');
const formSubmit = document.getElementById('formsubmit');




formSubmit.addEventListener('click', () => {
    submitData();
    });


const submitData = () => {

    let formData = {};
   
    formData.title = title.value;
    formData.description = description.value;
    formData.from="eiraj";
    formData.createdDate="12/10/2023"
    formData.postalcode="3043"
    
     
   
    console.log("Form Data Submitted: ", formData);
    sendData(formData);
}

const sendData = (findBuddyData) => {
    $.ajax({
        url: '/user/createFindbuddy',
        data: findBuddyData,
        type: 'POST',
        success: (result) => {
            alert(result.msg);
            location.reload(); // it automatically reloads the page 
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    })
}
