export const originalArray = (arr) => {
  return arr
}

// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME
// ways to export
// export const methodName = (param) => {
// }
// ----or---------
// export methodName function(param){
// }
// numberArray = [1,2,3,4]
// ARRAY ITERATOR METHODS
// return array with double values in array
export const doubleArray = (array) => { // => [2,4,6,8];  hint use map
  return array.map(x => x * 2)
} 
// return array with all even numbers
export const evensOnlyArray = (array) =>{// => [2,4,6,8];  hint use filter 
  return array.filter((x) => {
    if (x % 2 === 0 || x === 0){
      return x;
    }
    })
  }
// return array with sum of numbers
export const arraySum = (array) =>{ // => 10;  hint use reduce
  return array.reduce( (a, b) => {
    return a + b
  })
}
// return true if every item greater than 0
export const allNumbersGreaterThanZero = (array) =>{ // => true; use every
  return array.every( (e) => {
    if (e > 0){
      return true
    } else
      return false
    
  })
}
// return true if some item greater than 0
export const someNumbersAreOdd = (array) =>{ // => true; use some
  return array.some( (e) => {
     if(e % 2 === 0){
        return false
     } else {
        return true
     }
  }) 
} 

// return array double and even
export const evensOnlyAndDoubleArray = (array) => {// => [4,8]; // use map and filter
  let newArray = evensOnlyArray(array)
  return doubleArray(newArray)
} 


// find an item method return 'not found' if not found
export const findItem = (array, search) => { //=> 1
  let stuff = array.find( element => element == search);
    if (stuff == undefined){
      return 'not found'
    } else
      return stuff
  }


// sortArray(numberArray) //=> [4,3,2,1] *desc*
// artists = [
  // {name: 'a', likes:100},
  // {name: 'c', likes:99},
  // {name: 'c', likes:101}, 
// ]



// ARRAY ITERATOR METHODS ON Objects with name age 
// doubles likes of artist
// doubleLikes(artists)
// => [
//   {name: 'a', likes:200},
//   {name: 'c', likes:198},
//   {name: 'c', likes:202},  
// ]; 


// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter


//  return an array of strings of artist name

// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter


// get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes


// find an item method. Returns 'not found' if not found


// findObjByName(artists, 'a') // => {name: 'a', likes:200}

// returns array of artist sorted by likes

// sortArtistByName(artists)