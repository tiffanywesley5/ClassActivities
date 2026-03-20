// create an Array using an Array literal
const flowers = ["Rose" , "Lily",  "Tulip", "Sunflower", "Daisy"];

// access the 1st item in the Array
console.log(flowers[0]);
console.log(flowers[1]);
// access the last item in the Array

// print the length of the Array
console.log(flowers.length)
// use the length property to access the last item in the Array

// with for...of, loop over the Array, modify the value and add to a different Array
for (let flower of flowers){console.log(flower)};
