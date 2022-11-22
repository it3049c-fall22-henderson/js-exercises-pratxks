/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  return arr.indexOf(item);
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {

  // Creating variable to store the sum
  var sumarr = 0;

  // Running the for loop
  for (let i = 0; i < arr.length; i++) {
    sumarr += arr[i];
  }

  return sumarr;
}



// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {

  var filtered = arr.filter(
    function (val) {
      if (val == item) {
        return false;
      }
      return true;
    });

  return filtered;
}

// Append: you should be able to add an item to the end of an array
function append(arr, item) {
  arr.push(item);
  return arr;
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
  arr.pop();
  return arr;
}

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

// Square: you should be able to square each number in an array
// hint: use .map
// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  const squarearr = arr.map(x => x * x);
  return squarearr;
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};