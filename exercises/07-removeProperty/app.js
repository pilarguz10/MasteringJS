function removeProperty(obj, key) {
  // your code here
   delete obj[key];
   return obj;
}


let person={
    mail: "person@domain.es",
    job: "lifeguard"
}

console.log(removeProperty (person,  'mail')) ;

