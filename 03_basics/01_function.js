//         // here number1 and number2 is parameters while fu n defination 
// function addTwoNumber(number1 , number2){ 
//       console.log(number1 + number2);
// }
// // Here 3,4 is arrguments while on fun call
// addTwoNumber(3,4)



function addTwoNumber(number1 , number2){ 
    //  let result = number1 + number2
    //  return result

    return number1+number2

     console.log("amit") // after return, nothing can print
}
const result = addTwoNumber(3,5)
//console.log("result: ",result); 

//ways of argument and parameters

function loginUserMessage(username){
    if(!username)//(username === undefined)
        {
          console.log("Plese enter username")
          return 
        }
        return `${username} just logged in`
}

console.log(loginUserMessage("amit"))
console.log(loginUserMessage()) // undefined just logged in
