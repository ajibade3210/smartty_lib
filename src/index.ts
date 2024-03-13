/**
 * @description
 * @param {number} n
 * @returns {boolean}
 * @example
 * isOdd(1) // true
 * isOdd(2) // false
 * */
// Add Comments
// Add Comments2

export const isOdd = (n: number) => n % 2 === 1;

export const isEven = (n: number) => n % 2 === 0;

export const isVowel = (character: string) => {
  // Convert the character to lowercase to handle both uppercase and lowercase consonants
  var char = character.toLowerCase();
  // Check if the character is not a vowel
  return "aeiou".includes(char);
};

export const isConsonant = (character: string): boolean => {
  // Convert the character to lowercase to handle both uppercase and lowercase consonants
  var char = character.toLowerCase();
  // Check if the character is not a vowel
  return !"aeiou".includes(char);
};
