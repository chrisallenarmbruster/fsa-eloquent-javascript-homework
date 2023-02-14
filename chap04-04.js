/*
Deep comparison

The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties. 

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same 
properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to 
take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.


*/

let obj = {here: {is: "an"}, object: 2};



function deepEqual(obj1, obj2)
{
  if ((typeof obj1 === "object" && obj1 !== null) && (typeof obj2 === "object" && obj2 !== null))
  {
    if (Array.isArray(obj1) != Array.isArray(obj2)) return false
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for (let key of Object.keys(obj1))
    {
      if (!(key in obj2)) return false
      else return deepEqual (obj1[key],obj2[key])
    }
  } 
  else return obj1 === obj2
}











console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(7, {here: {is: "an"}, object: 2}));
// false

console.log(deepEqual(7, 7));
// true

console.log(deepEqual(obj,null));
// false

console.log(deepEqual(null,obj));
// false

console.log(deepEqual(null,null));
// true

console.log(deepEqual(['a','b','c'],{0:'a',1:'b',2:'c'}))
// false

x = ['a','b','c']

y = {0:'a',1:'b',2:'c'}

