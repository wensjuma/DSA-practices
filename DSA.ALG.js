

/**
 * 1. CHECKING IF A DUPLITE EXISTS IN AN ARRAY 
 * */
let checkDuplicates = () => {
  let arr = [1, 2, 3, 4, 7, 6, 6, 8, 4]
  let duplicates = {}
  for (let i = 0; i < arr.length; i++) {
    if (duplicates[arr[i]]) {
      return (arr[i])
    } else {
      duplicates[arr[i]] = arr[i]
    }
  }
  return false

}

console.log(checkDuplicates())


/**
 * 2. FIND THE LARGEST ITEM IN THE ARRAY
 */
function biggerItem() {
  const arr = [1, 2, 3, 4, 100];
  let bigger = arr[0]
  let smaller = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (bigger < arr[i]) {
      bigger = arr[i]
    } else if (smaller > arr[i]) {
      smaller = arr[i]
    }
  }
  return bigger
}

console.log(biggerItem())

/**
 * 3.CUMULATIVE AT EVERY INDEX
 */

let itemsCumulative = () => {
  let arr = [1, 3, 5, 7];
  let newArray = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i] + newArray[i - 1])
    //    console.log(arr[i] , arr[i-1], newArray[i], newArray[i-1])
  }
  return newArray
}

console.log(itemsCumulative())


/**
 * 4.multiple duplites 
 */
let multipleDuplicates = () => {
  const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
  let dupes = {};
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (dupes[arr[i]]) {
      newArray.push(arr[i])
    } else {
      dupes[arr[i]] = arr[i]
    }
  }
  return new Set(newArray)
}

console.log(multipleDuplicates())


let sortArrayList = (array) => {
  // let array = [2, 1, 0, 7, 9, 10, 5, 3, 8, 4, 6]
  // let item = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] > array[j]) {

        [array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }
  return array
}
console.log(sortArrayList([2, 1, 0, 7, 9, 10, 5, 3, 8, 4, 6]))


let findMissimgNum = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1
    }
  }
}
console.log(findMissimgNum())


/**
* sum 3 values that add up to a particular sum
*/
let summingThreeValues = () => {
  let targetSum = 8
  let array = [1, 2, 3, 3, 3, 2, 1, 4, 1, 7, 5]
  let resArray = []
  for (let i = 0; i < array.length; i++) {
    let tempVal = targetSum - array[i] - array[i + 1]
    if (array[tempVal]) {
      resArray.push([tempVal, array[i], array[i + 1]])
    }
  }
  return resArray;
}

console.log(summingThreeValues());


//FIBONACCI SEQUENCE STAIRCASE SOLUTION
let climbStairs = (n) => {
  let a = 3, b = 2;
  if (n <= 3) {
    return n;
  }
  for (let i = 0; i < n - 3; i++) {
    a = a + b;
    b = a - b;
  }
  return a;
}
