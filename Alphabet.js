// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Whiteboard:
// First, I want to split each character in the String
// Then, I want to create a switch statement with all the letters corresponding to their alphabet position
// Then, I want to join them all again as one long String

function alphabetPosition(text) {
    return text.toLowerCase().split('')
          .filter( c => c >= 'a' & c <= 'z' )
          .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
          .join(' ');
  }

  function alphabetPosition(text) {
    let result = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    text = text.replace(/\W*\d+/g, '').toLowerCase().split('');
    for (let i = 0; i < text.length; i++) {
        let j = alphabet.indexOf(text[i]) + 1;
        if (j) result.push(j);
      }
  }