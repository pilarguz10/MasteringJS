// Write your function here
function addToFrontOfNew (arr, num)
{
    // SLICE :
    //Devuelve una copia de una parte del array dentro de un nuevo array (de principio hasta fin(no incluido))
    let nuevoarray = arr.slice ();
    //UNSHIFT inserta los valores proporcionados al inicio de un objeto del tipo array. unshift 
    nuevoarray.unshift(num);
    return nuevoarray;

}
var input = [2,1,0 ];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]