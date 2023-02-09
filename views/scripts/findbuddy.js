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
    formData.from=localStorage.getItem("username");
    formData.createdDate=new Date().toISOString().slice(0, 10)
    formData.postalcode=localStorage.getItem("postalcode")
    
     
   
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
