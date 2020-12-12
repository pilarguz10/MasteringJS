// Write your function here

function select (arr, obj)
 {
    var result = {};
    arr.forEach(function (k) 
    {
        if (k in obj) 
        {
            result[k] = obj[k];
        }
    });
    return result;
 }

 var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }