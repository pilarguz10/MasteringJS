// Write your function here

function addToBackOfNew(arr, num)
{

    // SLICE :
    //Devuelve una copia de una parte del array dentro de un nuevo array (de principio hasta fin(no incluido))
    let nuevoarray = arr.slice ();
    //UNSHIFT inserta los valores proporcionados al inicio de un objeto del tipo array. unshift 
    nuevoarray.push(num);
    return nuevoarray;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log("Original: "+input); // --> [1, 2]
console.log("Final: "+output); // --> [1, 2, 3]