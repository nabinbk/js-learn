// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nabin",
            lastname: "BK"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 =Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 ={...obj1,...obj2}
// console.log(obj3)


const users = [
    {
    id: 1,
    email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
            },
           
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

/* 

// use this bellow code in react 

console.log(instructor);

const navbar = (company) => {

}

navbar(company = "hitesh")
*/


// {
//     name: "nabin",
//     coursename: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {}
]