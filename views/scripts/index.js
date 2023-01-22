//to get data from front end
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container1');
const formSubmit = document.getElementById('formSubmit');
const getName = document.getElementById('getName');
const em = document.getElementById('em');
const getPhoneno = document.getElementById('getPhoneno');
const getAddress = document.getElementById('address');
const getPostalCode = document.getElementById('postalcode');
const getPassword = document.getElementById('password');

signUpButton.addEventListener('click', () => {container.classList.add("right-panel-active");
});
formSubmit.addEventListener('click', () => {
    submitRegister();
    });
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
    
});


const submitRegister = () => {

    let formData = {};
    formData.name = getName.value;
    formData.em = em.value;
    formData.phoneno = getPhoneno.value;
    formData.getAddress = getAddress.value;
    formData.postalcode = getPostalCode.value;
    formData.getPassword = getPassword.value;
    console.log("Form Data Submitted: ", formData);
    Register(formData);
}
const Register = (registerData) => {
    $.ajax({
        url: '/user/create',
        data: registerData,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); // it automatically reloads the page 
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    })
}