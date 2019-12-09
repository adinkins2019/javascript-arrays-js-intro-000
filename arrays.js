var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
    let newArr = arr.unshift(element)
    return newArr
}

function addElementToEndOfArray(array, element){
  let newArr = arr.push(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return arr.unshift(element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  return arr.pop(element)
}

const accessElementInArray = (arr, index) => {
  return arr[index]
}
