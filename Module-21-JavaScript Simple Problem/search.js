
/*...............................................
Search any word from a string by 'include' method
.................................................*/
const lyrics = 'Hello, I am learning javascript';

const searchString = 'JAVAsCript';
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

//Alternative way we can do lower case in one line

const lowerInOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());


console.log(lowerInOneLine);

/*..................................................
Search any word from an string by 'indexOf' method
....................................................*/

console.log(lyrics.indexOf('Learning'));

//If we cannot show -1 for not existing word, we can write if condition

if(lyrics.indexOf('Learning') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}

console.log(lyrics.startsWith('Hello'));

