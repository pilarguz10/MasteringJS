// Write your function here

function getNthElementOfProperty (obj,key,n)
{
    //Si el array está vacío
   if(obj[key].length ===0){
       return undefined;
   }

   //Si la propiedad en la key no es un array
   if (!Array.isArray(obj[key]))
   {
     return undefined;
   }

   //Si la key no tiene propiedad
   if(!obj.hasOwnProperty(key))
   {
       return undefined;
   }

   //Si n está fuera de rango
   if(n >= obj[key].length)
   {
      return undefined;
   }
  
    else
    {
     return obj[key][n];
    }

     //set array at given key to variable
            // var arrayInsideObject = obj[key];
  //if array empty, or n is out of range, or property at given key is not an array, or there is no property, immediately return undefined
            //if (arrayInsideObject === undefined || arrayInsideObject.length === 0 || n >= arrayInsideObject.length || !(Array.isArray(arrayInsideObject)) )
   
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2