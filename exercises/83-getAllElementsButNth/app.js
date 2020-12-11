// Write your function here
function getAllElementsButNth (arr, nth)

{
    arr.splice (nth, 1);
    console.log (arr);
    return  arr;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']