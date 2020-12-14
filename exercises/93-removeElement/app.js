// Write your function here

function removeElement (arr, discarder)
{
    //Si todos los elementos coinciden, debería devolver una matriz vacía.
     if (typeof arr === "undefined" && arr === null)
      {
        return array;
      }
      
       return arr.filter(function(value) {
        return value !== discarder;
    });
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]