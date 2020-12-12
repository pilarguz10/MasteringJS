// Write your function here

function getElementsGreaterThan10AtProperty(obj, key)
    {
              let arr = [];
    //Si el array está vacío
    if(obj[key].length === 0)
    {
            return arr;
    }
    //Si el array no contiene ningún elemento igual a 10
    if(!obj[key] === 10)
    {
        return arr;
    }

    //Si la propiedad en esa key dada no es un array
    if(!Array.isArray(obj[key]))
    {
         return arr;
    }
    
    //Si no hay ninguna propiedad en dicha key
    if(!obj.hasOwnProperty(key))
    {
          return arr;
    }


     return obj[key].filter(function(item)
        {
                return item > 10;
        });
    }

    var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]