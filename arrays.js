var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var newArr = []
  newArr = array.map(item => newArr.push(item))
  newArr.unshift(element)
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  var newArr = []
  newArr = array.map(item => newArr.push(item))
  newArr.push(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  newArr = array
  newArr.push(element)
  return newArr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.unshift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
