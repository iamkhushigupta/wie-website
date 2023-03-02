var name = document.getElementById("fromName");
var email = document.getElementById("fromEmail");
var msg =  document.getElementById("message");
var submit = document.getElementById("submit");

function validate()
{
    console.log("Successfully called the function");
    if(submit){
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyInput();
        }
        else
        {
            sendEmail();
            success();
            console.log("sent successfully");
        }
    })}
}
function sendEmail()
{
    emailjs.send('service_t3wamfg','template_0ut7nyq',{
        fromName: name.value,
        formEmail: email.value,
        message: msg.value,
    });
}

function emptyInput()
{
    swal({
        icon: "error",
        title: "Oops..!",
        text: "Input Fields can't be empty!"
    });
}

function success()
{
    swal({
        icon: "success",
        title: "Good Job",
        text: "Message Sent Successfully!",
    });
}

function error()
{
    swal({
        icon: "warning",
        title: "Oops..!",
        text: "Something went wrong!"
    })
}