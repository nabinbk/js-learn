const user = {
    username: "nabin",
    price: 999,

    wecomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }

}
// user.wecomeMessage()
// user.username = "Hari"
// user.wecomeMessage()

// console.log(this);

// function chai(){
//     let username = "nabin"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "nabin"
//     console.log(this.username);
    
// }
// chai()

const chai =  () => {
    let username = "nabin"
    console.log(this);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)  //Implicit return

const addTwo = (num1, num2) => ({username: "nabin"})

console.log(addTwo(2, 8))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()