// Write your function here
function getOddLengthWordsAtProperty(obj, key)
{
     let arrayObjeto = obj[key];
     let arrayVacio = [];

    //Si el array está vacío, la propiedad en en esa key no es un array, si no hay propiedad  >> VACÍO

    if(arrayObjeto === 0 || !Array.isArray(arrayObjeto) || !obj.hasOwnProperty(key) )
    {
        return arrayVacio;
    }
    else
    {
         var output =arrayObjeto.filter(function(element) 
         {
             return element.length % 2 !== 0;
        });
        return output;
    }
    
  
     
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
