 // singleton
//  Object.create
 
 //  object literals

 const mySym = Symbol("key1")


 const JsUser = {
    name: "Nabin",
    "full name": "Nabin BK",
    [mySym]: "mykey1",
    age: 21,
    location: "Surkhet",
    email: "nabin@edu.com",
    isLoggedIn: false,
    lastLoggingDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "nabin@google.com"
// Object.freeze(JsUser)
JsUser.email = "nabin@chatgpt.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS users");
    
}
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name} `);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
