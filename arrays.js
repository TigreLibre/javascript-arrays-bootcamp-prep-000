var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

array = [1]

function addElementToBeginningOfArray(){
  array.unshift('foo');
  return array
}

function destructivelyAddElementToBeginningOfArray(){
  array = [1];
  array.unshift('foo');
  return newarray
}
