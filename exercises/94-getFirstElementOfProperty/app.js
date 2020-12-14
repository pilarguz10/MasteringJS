// Write your function here

function getFirstElementOfProperty(obj, key)
{
   let arr =[];

   //Si el array está vacío
   if(obj[key].length ===0){
       return "undefined";
   }

   //Si la propiedad en la key no es un array
   if (!Array.isArray(obj[key]))
   {
       return "undefined";
   }

   //Si la key no tiene propiedad
   if(!obj.hasOwnProperty(key))
   {
       return "undefined";
   }

    else{
      return obj[key][0];
    }


}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1