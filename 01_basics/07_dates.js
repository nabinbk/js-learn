// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


// let myCreateDate = new Date(2025, 1, 17)
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2025, 1, 17, 10, 55)
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2025-02-17")  // yy-mm-dd syntax
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})












