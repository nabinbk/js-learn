
function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("N");    
    
}
// sayMyName()

// function addTwoNumbers(number1, nunber2){    // This is called paremeter

    
//     console.log(number1 + nunber2);

// }

function addTwoNumbers(number1, nunber2){    

    // let result = number1 + nunber2
    // return result

    return number1 + nunber2

}
const result = addTwoNumbers(9, 6)  

// console.log(result);


function loginUserMessage(username = "ram"){
    if(!username){
        console.log("Please enter a username");
        return
        

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Nabin"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "nabin",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    

}

// handleObject(user)
handleObject({
    username: "ram",
    price: 999
})

const myNewArray = [200, 300, 500, 700]

function returnSecondValue(getArray){
    return getArray[2]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 700]));

