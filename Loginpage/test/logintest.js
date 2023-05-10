function formValidate() {
    var userName = document.querySelector("#exampleInputUsername").value
    var email = document.querySelector("#exampleInputEmail1").value
    var number = document.querySelector("#exampleInputNumber").value
    var password1 = document.querySelector("#exampleInputPassword1").value
    var password2 = document.querySelector("#exampleInputPassword2").value

    var month = getDateOfBirth("#month")
    var year = getDateOfBirth("#year")
    var day = getDateOfBirth("#daycolumn")

    var listMonth30 = ["April", "June", "September", "November"]


    if((userName == null)|| (userName == '')){
        var errorTab = document.querySelector("#noneUsername").innerHTML = "*Please provide username"
        errorTab.style.display = "block"
        return false;
    }

    
}



function getDateOfBirth(tagId) {
    let e = document.querySelector(tagId)
    let value = e.value;
    let text = e.options[e.selectedIndex].text;
    return text
}