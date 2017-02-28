
var addOne = function (n) {
  return n + 1;
}



var timesTwo = function (n) {
  return n * 2;
}



var incrementArray = function(array) {
  return array.map(n => n + 1);
}



var addNumberArray = function (array, number) {

  // return [].concat(number);

  // var newArray = array.slice();
  // newArray.push(number);
  // return newArray;

  return [ ...array, number];
};


var incrementObject = function (object) {
  const newObject = Object.assign({}, object);

  Object.keys(newObject).forEach(function(x) {
    newObject[x] = newObject[x] + 1
  });

  return newObject;

  // may require babel
  // const newObject = { ...object };
  //
  // Object.keys(newObject).forEach(function(x) {
  //   newObject[x] = newObject[x] + 1
  // });
  //
  // return newObject;
};



// leave me alone :) :) :) <3 <3 <3
var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3
