const accountId =144553
let accountEmail="nabin@123.com"
var accountPassword ="1234"
accountCity ="Surkhet"


//accountId = 2  //not allowed

accountEmail ="nb@nb.com"
accountPassword ="551123"
accountCity="Kathmandu"

let accountState;

console.log(accountId);

/*Prefer not to use var because of issue in block and functional scope   */

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
