// comparition operator == , >= , <=, !=  //

// console.log(3>=5)
// console.log(3<=5)
// console.log(3==5)

console.log(null == 0)
console.log(null > 0)
console.log(null <= 0)  

console.log(undefined == 0)    // false.   Avoid such converstion
console.log(undefined <0)     // false      make clean code
/*  
    Here the equality check operator == and compration operator >= , <= works differently
      In Compartion operator null converted into zero , that's why answer is true         
                                                                                             */

    //   strict check  ===   it also checks the datatype, without convestion 

console.log("2" === 2)
