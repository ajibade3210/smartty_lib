/**
 * @description
 * @param {string} character
 * @returns {boolean}
 * @example
 * isVowel(a) // true
 * isVowel(c) // false
 * */

export const isVowel = (character: string) => {
  // Convert the character to lowercase to handle both uppercase and lowercase consonants
  var char = character.toLowerCase();
  // Check if the character is not a vowel
  return "aeiou".includes(char);
};
