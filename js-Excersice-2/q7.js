// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​name​ ​ from​ ​ a ​ ​ particular​ ​ date.

// Input = 01-07-2020 or 01/07/2020
// Output = July






function getMonthNameFromDate(inputDate){
    const date = new Date(inputDate);
    const options = {month:'long'};
    const monthName = date.toLocaleString('en-US',options);
    return monthName
}




let inputDate = '12-07-2001'
let monthName = getMonthNameFromDate(inputDate);
console.log(monthName);