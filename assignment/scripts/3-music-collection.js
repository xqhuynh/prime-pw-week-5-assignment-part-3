console.log("***** Music Collection *****");

// addToCollection function to add album to collection ---------------------------------------------------------------------
// Create new variable called collection and set to empty array
let collection = [];
function addToCollection(title, artist, yearPublished) {
  // Create empty object w/title, artist, and yearPublished properties
  let albums = {
    title: title,
    artist: artist,
    year: yearPublished,
  };
  // Push albums to end of collection array and return albums array
  collection.push(albums);
  return console.log(albums);
}
// Add 6 albums to collection
addToCollection("Stillmatic", "Nas", 2001);
addToCollection("Illmatic", "Nas", 1994);
addToCollection("Californication", "Red Hot Chili Peppers", 1999);
addToCollection("Ready To Die", "Notorious Big", 1994);
addToCollection("Reasonable Doubt", "Jay-Z", 1996);
addToCollection("Thriller", "Michael Jackson", 1982);
console.log(collection);

// // showCollection function to loop over array and return album info -----------------------------------------------------
function showCollection(array) {
  // Log array length
  console.log("Length of array: " + array.length);
  for (let album of collection) {
    // Log info formatted like: `TITLE by ARTIST, published in YEAR`
    console.log(
      `${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
  }
}
// Call showCollection function with collection argument
showCollection(collection);

// findByArtist function to find artist and add to new array ---------------------------------------------------------------
function findByArtist(artist) {
  // set empty array to add matching artists
  let albumMatch = [];
  for (let album of collection) {
    if (album.artist === artist) {
      // Push each album to albumMatch array
      albumMatch.push(album);
    }
  }
  return albumMatch;
}

// Test findByArtist function
let nas = findByArtist("Nas");
console.log(`Should return two array objects:`, nas); // Should return two array objects
let artistNotFound = findByArtist("Tupac");
console.log(`Should return empty array:`, artistNotFound); // Should return empty array
let mj = findByArtist("Michael Jackson");
console.log(`Should return Michael Jackson's album:`, mj);

console.log("***** Stretch Goals *****");
// search Function to find albums matching artist and year --------------------------------------------------------------------------------
function search(artist, year) {
  // Create empty array to store search results
  let resultsMatch = [];
  // Create empty object with properties set to artist and year
  let searchObject = {
    artist: artist,
    yearPublished: year,
  };
  // Loop through albums in collection and find matching album with artist and year criteria
  for (let album of collection) {
    if (album.artist === artist && album.yearPublished === year) {
      resultsMatch.push(album);
    }
  }
  return resultsMatch;
}
let nasSearch = search("Nas", 1994);
console.log(`Should return Nas' album, Illmatic:`, nasSearch);
let nasIncorrectYear = search("Nas", 1999); // Incorrect year in array
console.log(`Should return empty array:`, nasIncorrectYear);
let tupacSearch = search("Tupac", 1999); // No artist in array
console.log(`Should return empty array:`, tupacSearch);
let emptySearch = search(); // No argument passed
console.log(`Should return empty array:`, emptySearch);
