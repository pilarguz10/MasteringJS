// Write your function here
function getLastElementOfProperty(obj, key)
{
    //Guardo el array de la key en una variable
       let arrayObjeto = obj[key];
     //Si el array está vacío, si la propiedad en la key no es un array o si la key no tiene propiedad => UNDEFINED
    if (arrayObjeto.length === 0 || !(Array.isArray(arrayObjeto)) || !obj.hasOwnProperty(key) )
    {
        return undefined;
    }    

    else 
    {
      
          return arrayObjeto[obj[key].length - 1];
    }
   
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5