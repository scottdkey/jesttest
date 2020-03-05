export const originalArray = (arr) => {
  return arr
}

// ARRAY ITERATOR METHODS
// return array with double values in array
export const doubleArray = (array) => { // => [2,4,6,8];  hint use map
  return array.map(x => x * 2)
}
// return array with all even numbers
export const evensOnlyArray = (array) => { // => [2,4,6,8];  hint use filter 
  return array.filter((x) => {
    if (x % 2 === 0 || x === 0) {
      return x;
    }
  })
}
// return array with sum of numbers
export const arraySum = (array) => { // => 10;  hint use reduce
  return array.reduce((a, b) => {
    return a + b
  })
}
// return true if every item greater than 0
export const allNumbersGreaterThanZero = (array) => { // => true; use every
  return array.every((e) => {
    if (e > 0) {
      return true
    } else
      return false

  })
}
// return true if some item greater than 0
export const someNumbersAreOdd = (array) => { // => true; use some
  return array.some((e) => {
    if (e % 2 === 0) {
      return false
    } else {
      return true
    }
  })
}

// return array double and even
export const evensOnlyAndDoubleArray = (array) => { // => [4,8]; // use map and filter
  let newArray = evensOnlyArray(array)
  return doubleArray(newArray)
}


// find an item method return 'not found' if not found
export const findItem = (array, search) => { //=> 1
  let searched = array.find(element => element == search);
  if (searched == undefined) {
    return 'not found'
  } else
    return searched
}


export const sortArray = (array) => { //=> [4,3,2,1] *desc*
  return array.sort((a, b) => b - a)
}


// ARRAY ITERATOR METHODS ON Objects with name age 
// doubles likes of artist
export const doubleLikes = (artists) => {
  return artists.map((a) => ({ name: a.name, likes: a.likes * 2 }))
};

// =>[ {name: 'c', likes:101} ]; // use filter
export const moreThan100Likes = (artists) => {
  return artists.filter(artist => artist.likes > 100)
}

//  return an array of strings of artist name
export const allArtistNames = (artists) => {
  let mapped = artists.map(artist =>{
    return artist.name
  });
  return mapped
}
//there wasnt a defined method in this one. so.. I'm guessing that was left out on purpose? ^^

//=> ['c']; // use filter
export const justArtistMoreThan100Likes = (artists) => {
  let artist = moreThan100Likes(artists)
  for (var i = 0; i < artist.length; i++) {
    return artist[i].name
  }
}


// get total number of likes fo all artists
export const numberOfLikes = (artists) => { //=> 300; // get all likes
  return artists.reduce((accumulator, artist) => accumulator + artist.likes, 0);
}
// find an item method. Returns 'not found' if not found
export const findObjByName = (artists, name) => { // => {name: 'a', likes:200}
  let searched = artists.find((artist) => artist.name === name);
  if (searched == undefined) {
    return 'not found'
  } else
    return searched
}

// returns array of artist sorted by likes
// sortArtistByName(artists)
export const sortArtistByName = (artists) => {
  return artists.sort((a, b) => {
    if (a.likes < b.likes) {
      return -1;
    }
    if (a.likes > b.likes) {
      return 1;
    }
    if (a.likes == b.likes) {
      return 0;
    }
  })
}
//I feel like this is named wrong... and you did it on purpose