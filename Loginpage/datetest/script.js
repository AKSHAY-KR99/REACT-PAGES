const yearSelected = document.querySelector("#year")
const daySelected = document.querySelector("#day")
const monthSelected = document.querySelector("#month")


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']

function populateMonths(){
    let html_data = ''
    for(let i=0;i<months.length; i++){
        html_data += `<option>${months[i]}</option>`

        // let option = document.createElement('option')
        // option.textContent = months[i]
        // monthSelected.appendChild(option)
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