function generateBtn() {
    let btn = document.getElementById('email-btn');
    placeTheBtn(252.5,-0.25,btn);
}

function placeTheBtn(yleft,xtop,btn) {
    console.log("Hi there!");
    let email = document.getElementById('email-field');
    let cords = email.getBoundingClientRect();
    
    let btnx = cords.x;
    let btny = cords.y;

    btn.style.left = btnx + yleft + 'px';
    btn.style.top = btny + xtop + 'px';
}

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
        placeTheBtn(215,11.5,error_img);

    }
}
    

