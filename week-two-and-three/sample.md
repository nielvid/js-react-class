JavaScript provides a rich set of array methods to manipulate and work with arrays. Here is a comprehensive list of these methods along with sample usage:

Mutator Methods
These methods modify the array they are called on.

push()
Adds one or more elements to the end of an array and returns the new length of the array.

javascript
Copy code
```
let arr = [1, 2, 3];
arr.push(4);  // arr is now [1, 2, 3, 4]
pop()
```
Removes the last element from an array and returns that element.

javascript
Copy code
```
let arr = [1, 2, 3];
let lastElement = arr.pop();  // arr is now [1, 2]; lastElement is 3
shift()
```
Removes the first element from an array and returns that element.

javascript
Copy code
```
let arr = [1, 2, 3];
let firstElement = arr.shift();  // arr is now [2, 3]; firstElement is 1
unshift()
```
Adds one or more elements to the beginning of an array and returns the new length of the array.

javascript
Copy code
```
let arr = [1, 2, 3];
arr.unshift(0);  // arr is now [0, 1, 2, 3]
splice()
```
Adds and/or removes elements from an array.

javascript
Copy code
```
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b');  // arr is now [1, 'a', 'b', 4]
sort()
Sorts the elements of an array in place and returns the sorted array.

javascript
Copy code
let arr = [3, 1, 4, 1, 5, 9];
arr.sort();  // arr is now [1, 1, 3, 4, 5, 9]
reverse()
Reverses the order of the elements in an array in place.

javascript
Copy code
let arr = [1, 2, 3];
arr.reverse();  // arr is now [3, 2, 1]
Accessor Methods
These methods do not modify the array and typically return a new array or a single value.

concat()
Merges two or more arrays.

javascript
Copy code
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);  // newArr is [1, 2, 3, 4]
join()
Joins all elements of an array into a string.

javascript
Copy code
let arr = [1, 2, 3];
let str = arr.join('-');  // str is '1-2-3'
slice()
Returns a shallow copy of a portion of an array into a new array.

javascript
Copy code
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3);  // slicedArr is [2, 3]
indexOf()
Returns the first index at which a given element can be found in the array.

javascript
Copy code
let arr = [1, 2, 3];
let index = arr.indexOf(2);  // index is 1
lastIndexOf()
Returns the last index at which a given element can be found in the array.

javascript
Copy code
let arr = [1, 2, 3, 2];
let index = arr.lastIndexOf(2);  // index is 3
includes()
Determines whether an array includes a certain value.

javascript
Copy code
let arr = [1, 2, 3];
let hasTwo = arr.includes(2);  // hasTwo is true
toString()
Returns a string representing the array.

javascript
Copy code
let arr = [1, 2, 3];
let str = arr.toString();  // str is '1,2,3'
toLocaleString()
Returns a localized string representing the array.

javascript
Copy code
let arr = [1, 2, 3];
let str = arr.toLocaleString();  // str might vary based on locale
Iteration Methods
These methods iterate over the array, typically applying a function to each element.

forEach()
Executes a provided function once for each array element.

javascript
Copy code
let arr = [1, 2, 3];
arr.forEach(element => console.log(element));  // logs 1, 2, 3
map()
Creates a new array with the results of calling a provided function on every element.

javascript
Copy code
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);  // doubled is [2, 4, 6]
filter()
Creates a new array with all elements that pass the test implemented by the provided function.

javascript
Copy code
let arr = [1, 2, 3, 4];
let evens = arr.filter(x => x % 2 === 0);  // evens is [2, 4]
reduce()
Applies a function against an accumulator and each element to reduce it to a single value.

javascript
Copy code
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);  // sum is 10
reduceRight()
Applies a function against an accumulator and each element (from right to left) to reduce it to a single value.

javascript
Copy code
let arr = [1, 2, 3, 4];
let sum = arr.reduceRight((acc, curr) => acc + curr, 0);  // sum is 10
some()
Tests whether at least one element passes the test implemented by the provided function.

javascript
Copy code
let arr = [1, 2, 3];
let hasEven = arr.some(x => x % 2 === 0);  // hasEven is true
every()
Tests whether all elements pass the test implemented by the provided function.

javascript
Copy code
let arr = [1, 2, 3];
let allPositive = arr.every(x => x > 0);  // allPositive is true
find()
Returns the first element that satisfies the provided testing function.

javascript
Copy code
let arr = [1, 2, 3];
let found = arr.find(x => x > 1);  // found is 2
findIndex()
Returns the index of the first element that satisfies the provided testing function.

javascript
Copy code
let arr = [1, 2, 3];
let index = arr.findIndex(x => x > 1);  // index is 1
flat()
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

javascript
Copy code
let arr = [1, [2, [3, 4]]];
let flatArr = arr.flat(2);  // flatArr is [1, 2, 3, 4]
flatMap()
First maps each element using a mapping function, then flattens the result into a new array.

javascript
Copy code
let arr = [1, 2, 3];
let flatMapped = arr.flatMap(x => [x, x * 2]);  // flatMapped is [1, 2, 2, 4, 3, 6]
entries()
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

javascript
Copy code
let arr = ['a', 'b', 'c'];
let iterator = arr.entries();
for (let [index, value] of iterator) {
  console.log(index, value);  // logs 0 'a', 1 'b', 2 'c'
}
keys()
Returns a new Array Iterator that contains the keys for each index in the array.

javascript
Copy code
let arr = ['a', 'b', 'c'];
let iterator = arr.keys();
for (let key of iterator) {
  console.log(key);  // logs 0, 1, 2
}
values()
Returns a new Array Iterator object that contains the values for each index in
