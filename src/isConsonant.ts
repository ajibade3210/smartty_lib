/**
 * @description
 * checks if argument recieved is a consonant character
 * @param {string} character
 * @returns {boolean}
 * @example
 * isConsonant(x) // true
 * isConsonant(a) // false
 * */

export const isConsonant = (character: string): boolean => {
  // Convert the character to lowercase to handle both uppercase and lowercase consonants
  var char = character.toLowerCase();
  // Check if the character is not a vowel
  return !"aeiou".includes(char);
};
