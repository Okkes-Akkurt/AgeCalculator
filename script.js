const calculate = document.querySelector('.calculate');

calculate.addEventListener('click', (e) => {
    let enteredDate = new Date(document.querySelector('#date').value)

    let inputDate = {
        year: enteredDate.getFullYear(),
        month: enteredDate.getMonth(),
        day: enteredDate.getDate(),
    }

    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
    let monthDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (inputDate.day > currentDay) {
        currentDay = currentDay + monthDates[currentMonth - 1]
        currentMonth--;
    }

    if (inputDate.month > currentMonth) {
        currentMonth += 12;
        currentYear--;
        currentMonth--;
    }

    let totalDay = currentDay - inputDate.day;
    let totalMonth = currentMonth - inputDate.month;
    let totalYear = currentYear - inputDate.year;

    document.querySelector('#years').innerHTML = totalYear;
    document.querySelector('#months').innerHTML = totalMonth;
    document.querySelector('#days').innerHTML = totalDay;

});