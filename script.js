function checkEmail(){
    let error_img = document.getElementById('error-img');
    error_img.style.display = "none";
    let error_info = document.getElementById('error-info');
    error_info.style.display = "none";

    let emailField = document.getElementById('email-field');
    let email = emailField.value;
    let validity = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if (validity) {
        emailField.style.border = '2.5px solid #abd499';
    }
    else{
        emailField.style.border = '2.5px solid #f96262';
        error_info.style.display = "block";
        error_img.style.display = "block";
    }
}
    

