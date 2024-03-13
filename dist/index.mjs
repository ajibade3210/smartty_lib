// src/dig.ts
var dig = (source, path, shouldThrow = false) => {
  if (source === null || source === void 0) {
    return void 0;
  }
  const parts = splitPath(path);
  return parts.reduce((acc, el) => {
    if (acc === void 0) {
      if (shouldThrow) {
        throw new Error(`Could not dig the value using path: ${path}`);
      } else {
        return void 0;
      }
    }
    if (isNum(el)) {
      const arrIndex = parseInt(el);
      if (acc instanceof Set) {
        return Array.from(acc)[arrIndex];
      } else {
        return acc[arrIndex];
      }
    } else {
      if (acc instanceof Map) {
        return acc.get(el);
      } else {
        return acc[el];
      }
    }
  }, source);
};
var ALL_DIGITS_REGEX = /^\d+$/;
function isNum(str) {
  return str.match(ALL_DIGITS_REGEX);
}
var PATH_SPLIT_REGEX = /\.|\]|\[/;
function splitPath(str) {
  return str.split(PATH_SPLIT_REGEX).filter((x) => !!x);
}

// src/isConsonant.ts
var isConsonant = (character) => {
  var char = character.toLowerCase();
  return !"aeiou".includes(char);
};

// src/isEven.ts
var isEven = (n) => n % 2 === 0;

// src/isOdd.ts
var isOdd = (n) => n % 2 === 1;

// src/isVowels.ts
var isVowel = (character) => {
  var char = character.toLowerCase();
  return "aeiou".includes(char);
};
export {
  dig,
  isConsonant,
  isEven,
  isOdd,
  isVowel
};
