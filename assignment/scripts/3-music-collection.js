console.log("***** Music Collection *****");
let collection = [];
// addToCollection function
function addToCollection(title, artist, yearPublished) {
  collection.push({ title, artist, yearPublished });
  return [title, artist, yearPublished];
}
// Test function
console.log(addToCollection("Stillmatic", "Nas", 2001));
console.log(addToCollection("Illmatic", "Nas", 1991));
console.log(addToCollection("Californication", "Red Hot Chili Peppers", 1991));
console.log(addToCollection("Ready To Die", "Notorious Big", 1990));
console.log(addToCollection("Reasonable Doubt", "Jay-Z", 1994));
console.log(addToCollection("Thriller", "Michael Jackson", 1998));
console.log(collection);

// showCollection function to loop over array and return album info
function showCollection(array) {
  console.log(`Number of items in array: ${collection.length}`);
  for (let album in collection) {
    console.log(
      `${collection[album].title} by ${collection[album].artist}, published in ${collection[album].yearPublished}`
    );
  }
}
// Test function by using collection array
showCollection(collection);

// findByArtist function
function findByArtist(name) {
  let resultsArray = [];
  for (let album in collection) {
    if (name === collection[album].artist) {
      resultsArray.push(name);
      return console.log(resultsArray);
    }
  }
  return console.log(resultsArray);
}

// Test function
findByArtist("Nas");
findByArtist("Notorious Big");
findByArtist("Britney Spears");
findByArtist("Nas");

// Stretch Goals
console.log("Stretch Goals");
// search function

function search(artist, year) {
  let newCollection = [];
  for (album in collection) {
    if (
      artist === collection[album].artist &&
      year === collection[album].yearPublished
    ) {
      return collection[album];
    }
  }
  return newCollection;
}
console.log(search("Nas", 2001));
console.log(search("Nas", 1994)); // return undefined, year doesn't match
console.log(search("Thriller", 1997)); // undefined, year doesn't match
console.log(search('Michael Jackson', 1998));
