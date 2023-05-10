function passwordEye() {
    var password = document.querySelector("#exampleInputPassword1");
    var showIcon = document.querySelector("#show");
    var hideIcon = document.querySelector("#hide");

    if (password.type === 'password') {
        password.type = 'text';
        showIcon.style.visibility = 'hidden';
        hideIcon.style.visibility = 'visible';

    }
    else {
        password.type = 'password';
        showIcon.style.visibility = 'visible';
        hideIcon.style.visibility = 'hidden';
    }
}




function formContentvalidation() {
    var emailValue = document.querySelector("#exampleInputEmail1").value;
    var passValue = document.querySelector("#exampleInputPassword1").value;

    // var emailError = document.querySelector("#noneEmail");
    // var passwordError = document.querySelector("#nonePassword1");

    var erroNum = 0

    if ((emailValue == "") || (emailValue == null)) {
        let emailError = document.querySelector("#noneEmail");
        emailError.innerHTML = "Please enter email"
        emailError.style.visibility = "visible";
        erroNum += 1
    }
    else {
        if (emailValue.length < 7) {
            let emailError = document.querySelector("#noneEmail");
            emailError.innerHTML = "Invalid email, please enter a valid email";
            emailError.style.visibility = "visible";
            erroNum += 1
        }
        else{
            let emailError = document.querySelector("#noneEmail");
            emailError.style.visibility = "hidden";
        }
    }
    if ((passValue == "") || (passValue == null)) {
        let passwordError = document.querySelector("#nonePassword1")
        passwordError.innerHTML = "Please enter password"
        passwordError.style.visibility = "visible";
        erroNum += 1
    }
    else{
        let passwordError = document.querySelector("#nonePassword1")
        passwordError.style.visibility = "hidden";
    }
    console.log(erroNum);
    return erroNum;
}


function signInFormValidation(){
    let formResult = formContentvalidation();
    if (formResult == 0){
        // alert("You are Success fully Logged In, click OK to redirect dashboard")
        window.location.href = 'dashboard.html'
    }
}