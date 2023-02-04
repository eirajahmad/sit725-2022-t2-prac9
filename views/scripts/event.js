//to get data from front end
const title = document.getElementById('title');
const description = document.getElementById('description');
const formSubmit = document.getElementById('formsubmit');
const imageevent = document.getElementById('imageevent');
const duration = document.getElementById('duration');
//add images get elemnet and add duration get element 
//add them to modal too




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
    formData.duration=duration.value
    formData.imageEvent=imageevent.value
    //duration and imageEvent
     
   
    console.log("Form Data Submitted: ", formData);
    sendData(formData);
}

const sendData = (evnetData) => {
    $.ajax({
        url: '/user/createEvent',
        data: evnetData,
        type: 'POST',
        success: (result) => {
            alert('event added succesfully');
            location.reload(); // it automatically reloads the page 
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    })
}
