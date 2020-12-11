// Write your function here
function getAverageOfElementsAtProperty (obj, key)
{
   //Si no hay ninguna propiedad 
  if (!obj.hasOwnProperty(key))
  {
      return 0;
  }
  //Si la propiedad no es un Array
  if (!Array.isArray(obj[key]))
  {
        return 0;
  }
  //Si el array de la key está vacío
  if(obj[key].length === 0)
  {
      return 0 ;
  }

  let sumatorio = 0;
  for (let i =0; i<obj[key].length; i++)
  {
      sumatorio += obj[key][i];
  }
  return sumatorio / obj[key].length;

}

var obj = {
  key: [1,2,3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2