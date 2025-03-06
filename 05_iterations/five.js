// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(item) {
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index,arr);
    
// })

const myCodding = [
    {
        languageName: "javascript",
        laguageFileName: "js"
    },
    {
        languageName: "java",
        laguageFileName: "java"
    },
    {
        languageName: "python",
        laguageFileName: "py"
    },
]

myCodding.forEach( (item) => {
    console.log(item.languageName);
    
})