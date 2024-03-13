/**
 * @description
 * @param {string} character
 * @returns {boolean}
 * @example
 * isOdd(1) // true
 * isOdd(2) // false
 * */

export const isConsonant = (character: string): boolean => {
  // Convert the character to lowercase to handle both uppercase and lowercase consonants
  var char = character.toLowerCase();
  // Check if the character is not a vowel
  return !"aeiou".includes(char);
};
