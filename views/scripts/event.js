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
    formData.from=localStorage.getItem("username")
    formData.createdDate= new Date().toISOString().slice(0, 10)
    formData.postalcode=localStorage.getItem("postalcode")
    formData.duration=duration.value
    if(formData.title=="Dancing"){
        formData.imageEvent="https://media.istockphoto.com/id/1267332085/photo/stylish-man-and-woman-dancing-hip-hop-in-bright-clothes-on-gradient-background-at-dance-hall.jpg?s=612x612&w=0&k=20&c=1gekhO1digiwDXAJBhLZFVUvqKv_2Nsy1UX-8SlSvCM="
     }else if (formData.title=="Football"){
        formData.imageEvent="https://www.aljazeera.com/wp-content/uploads/2022/11/2022-04-20T202058Z_1188430601_UP1EI4K1KIWO1_RTRMADP_3_SOCCER-ENGLAND-CHE-ARS-REPORT.jpg?resize=1800%2C1800"
     }else if (formData.title=="Christmas"){
        formData.imageEvent="https://images.unsplash.com/photo-1575493035843-9560639476d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lcnJ5JTIwY2hyaXN0bWFzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
     }else{
        formData.imageEvent="https://media.istockphoto.com/id/1158027853/photo/team-together-we-can-achieve-more.jpg?s=612x612&w=0&k=20&c=wW9pc1cG2erIura57JdNedRL77xXhXeQ4ctJkffIs60="
     }
  
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
