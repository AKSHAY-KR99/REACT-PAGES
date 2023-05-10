const yearSelected = document.querySelector("#year")
const daySelected = document.querySelector("#daycolumn")
const monthSelected = document.querySelector("#month")


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']

function populateMonths(){
    let html_data = ''
    for(let i=0;i<months.length; i++){
        html_data += `<option>${months[i]}</option>`
    }
    monthSelected.innerHTML = html_data
}

let previousDay;

function populateYear(){
    let html_data = ''
    for(let i=1960;i<2022; i++){
        html_data += `<option>${i}</option>`
    }
    yearSelected.innerHTML = html_data
}

function populateDay(monthOpt, yearOpt){
    let dayNum;
    if((monthOpt == 'January') || (monthOpt == 'March') || (monthOpt == 'May') || (monthOpt == 'July') || (monthOpt == 'August') || 
    (monthOpt == 'October') || (monthOpt == 'December')){
        dayNum = 31
    }
    else if ((monthOpt == 'April') || (monthOpt == 'June') || (monthOpt == 'September') || (monthOpt == 'November')){
        dayNum = 30
    }
    else{
        if(yearOpt%4 === 0){
            dayNum = 29
        }
        else{
            dayNum = 28
        }
    }
    let html_data = ''
    for(let i=1;i<=dayNum; i++){
        html_data += `<option>${i}</option>`
    }
    daySelected.innerHTML = html_data

    if(previousDay){
        daySelected.value = previousDay
        if(daySelected.value === ''){
            daySelected.value = previousDay - 1
        }
        if(daySelected.value === ''){
            daySelected.value = previousDay - 2
        }
        if(daySelected.value === ''){
            daySelected.value = previousDay - 3
        }
    }
}

populateYear()
populateMonths()
populateDay(monthSelected.value, yearSelected.value)


yearSelected.onchange = function (){
    populateDay(monthSelected.value, yearSelected.value)
}

monthSelected.onchange = function (){
    populateDay(monthSelected.value, yearSelected.value)
}

daySelected.onchange = function(){
    previousDay = daySelected.value
}


function stringContainsNumber(_string) {
    return /\d/.test(_string);
}


function formValidation() {
    var userName = document.querySelector("#exampleInputUsername").value
    var email = document.querySelector("#exampleInputEmail1").value
    var number = document.querySelector("#exampleInputNumber").value
    var password1 = document.querySelector("#exampleInputPassword1").value
    var password2 = document.querySelector("#exampleInputPassword2").value

    var radio = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    // var month = getDateOfBirth("#month")
    // var year = getDateOfBirth("#year")
    // var day = getDateOfBirth("#daycolumn")

    var listMonth30 = ["April", "June", "September", "November"]

    var errorCount = 0
    // var radio = document.querySelector('input[name="flexRadioDefault"]').value;

    if ((userName == null) || (userName == "")) {
        let usernameError = document.querySelector("#noneUsername")
        usernameError.innerHTML = "*Please provide username"
        usernameError.style.visibility = "visible";
        errorCount += 1
    }
    else {
        let usernameError = document.querySelector("#noneUsername")
        usernameError.style.visibility = "hidden";
    }
    if ((email == null) || (email == "")) {
        let emailError = document.querySelector("#noneEmail")
        emailError.innerHTML = "*Please provide email"
        emailError.style.visibility = "visible";
        errorCount += 1
    }
    else {
        let emailError = document.querySelector("#noneEmail")
        emailError.style.visibility = "hidden";
    }
    if ((number == null) || (number == "")) {
        let numberError = document.querySelector("#nonePhone")
        numberError.innerHTML = "*Please provide phone number"
        numberError.style.visibility = "visible";
        errorCount += 1
    }
    else {
        if (isNaN(number) == true) {
            let numberError1 = document.querySelector("#nonePhone")
            numberError1.innerHTML = "*Please enter valid phone number"
            numberError1.style.visibility = "visible";
            errorCount += 1
        }
        else {
            let numberError1 = document.querySelector("#nonePhone")
            numberError1.style.visibility = "hidden";
        }
    }
    if ((password1 == null) || (password1 == "")) {
        let passError = document.querySelector("#nonePassword1")
        passError.innerHTML = "*Please Enter Password"
        passError.style.visibility = "visible";
        errorCount += 1
    }
    else if (password1.length < 8) {
        let passLenError = document.querySelector("#nonePassword1")
        passLenError.innerHTML = "*Password must contain at least 8 characters"
        passLenError.style.visibility = "visible";
        errorCount += 1
    }
    else {
        let isContainNum = stringContainsNumber(password1)
        if (isContainNum == false) {
            let passNumError = document.querySelector("#nonePassword1")
            passNumError.innerHTML = "*Password must contain at least one number"
            passNumError.style.visibility = "visible";
            errorCount += 1
        }
        else {
            let passNumError = document.querySelector("#nonePassword1")
            passNumError.style.visibility = "hidden";
        }
    }
    if (password1 != password2) {
        let passPass = document.querySelector("#nonePassword2")
        passPass.innerHTML = "*Password didn't match. please check"
        passPass.style.visibility = "visible";
        errorCount += 1
    }
    else {
        let passPass = document.querySelector("#nonePassword2")
        passPass.style.visibility = "hidden";
    }
    console.log(errorCount);
    return errorCount

}


function redirectionTask() {
    var result = formValidation()
    if (result == 0) {
        // alert("You are Success fully Signed Up, click OK to redirect dashboard")
        window.location.href = 'dashboard.html'
    }
}


function passwordEye1() {
    let password = document.querySelector("#exampleInputPassword1");
    let showIcon = document.querySelector("#show");
    let hideIcon = document.querySelector("#hide");

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


function passwordEye2() {
    let password = document.querySelector("#exampleInputPassword2");
    let showIcon = document.querySelector("#show2");
    let hideIcon = document.querySelector("#hide2");

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




