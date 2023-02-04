//to get data from front end
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container1');
const formSubmit = document.getElementById('formSubmit');
const loginSubmit = document.getElementById('loginSubmit');
const getName = document.getElementById('getName');
const em = document.getElementById('em');
const getPhoneno = document.getElementById('getPhoneno');
const getAddress = document.getElementById('address');
const getPostalCode = document.getElementById('postalcode');
const getPassword = document.getElementById('password');

//login div
const getLoginEmail = document.getElementById('emailSignIn');
const getLoginPassword = document.getElementById('passwordSignIn');

signUpButton.addEventListener('click', () => {container.classList.add("right-panel-active");
});
formSubmit.addEventListener('click', () => {
    submitRegister();
    });
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
    
});
loginSubmit.addEventListener('click', () => {
    submitLogin();
    });


const submitRegister = () => {

    let formData = {};
   
    formData.firstname = getName.value;
    formData.lastname = getName.value;
    formData.email = em.value;
    formData.password = getPassword.value;
   
    console.log("Form Data Submitted: ", formData);
    Register(formData);
}
const submitLogin = () => {

    let formData = {};
   
    formData.email = getLoginEmail.value;
    formData.password = getLoginPassword.value;  
    console.log("Form Data Login Submitted: ", formData);
    Login(formData);
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
const Login = (loginData) => {
    $.ajax({
        url: '/user/login',
        data: loginData,
        type: 'POST',
        success: (result) => {
            if(result.status==true){
               
                for (var key in result.message) {
                    console.log(key);
                    if(key=="firstname"){
                    localStorage.setItem("username",result.message[key]);
                        
                    }
                    if(key=="email"){
                        localStorage.setItem("email",result.message[key]);
               
                        
                    }
                   
                }   
              
                localStorage.setItem("postalcode",'3045');
                location.href = "http://localhost:9002/dashboard.html"
            }else{
                alert(result.message);
            }
            
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    })
}