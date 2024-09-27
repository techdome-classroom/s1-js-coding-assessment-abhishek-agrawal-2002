const getTotalIsles = function (grid) {

// program2.js

function decodeTheRing(str, pattern) {
  // Check if lengths of the strings match
  if (str.length !== pattern.length) {
      return false;
  }

  // Iterate over the characters of the string
  for (let i = 0; i < str.length; i++) {
      // If the current character in the pattern is '*', skip the check
      if (pattern[i] === '*') {
          continue;
      }
      // If the current character in str and pattern don't match, return false
      if (str[i] !== pattern[i]) {
          return false;
      }
  }

  // If the loop completes, it means the strings match the pattern
  return true;
}

module.exports = decodeTheRing;

};

module.exports = getTotalIsles;
