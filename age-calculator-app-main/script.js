const button = document.querySelector('#btn-arrow');
const showYears = document.querySelector('.years');
const showMonths = document.querySelector('.months');
const showDays = document.querySelector('.days');
const labels = document.querySelectorAll('label');
const disError = document.querySelector('.error');

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

let input_day;
let input_month;
let input_year;

function calAge(){
    showYears.innerHTML = currentYear - input_year;
    showMonths.innerHTML = currentMonth - input_month;
    showDays.innerHTML = currentDay - input_day;
}

function errorColor(){
    labels.forEach((e) => {
        e.style.color = "hsl(0, 100%, 67%)";
    })
}

button.addEventListener('click', () => {
    input_day = document.querySelector('#day').value;
    input_month = document.querySelector('#month').value;
    input_year = document.querySelector('#year').value;
    
    if(input_day=="" || input_month=="" || input_year==""){

        errorColor();
        disError.innerHTML = `
            <span>This field is required</span>
            <span>This field is required</span>
            <span>This field is required</span>
            `;
    }
    else if((input_day > 31 || input_day < 0)  && (input_month > 12 || input_month < 0 )&& (input_year > currentYear || input_year < 1900)){

        errorColor();
        disError.innerHTML = `
            <span>Must be a valid day</span>
            <span>Must be a valid month</span>
            <span>Must be a valid year</span>
            `;
    }
    else{
        calAge()
    }
    
    
})

