/**
 * A dig function that takes any object with a nested structure and a path,
 * and returns the value under that path or undefined when no value is found.
 *
 * @param {any}     source - A nested objects.
 * @param {string}  path - A path string, for example `my[1].test.field`
 * @param {boolean} [shouldThrow=false] - Optionally throw an exception when nothing found
 *
 */
declare const dig: (source: any, path: string, shouldThrow?: boolean) => any;

/**
 * @description
 * @param {string} character
 * @returns {boolean}
 * @example
 * isOdd(1) // true
 * isOdd(2) // false
 * */
declare const isConsonant: (character: string) => boolean;

/**
 * @description
 * @param {number} n
 * @returns {boolean}
 * @example
 * isOdd(1) // true
 * isOdd(2) // false
 * */
declare const isEven: (n: number) => boolean;

/**
 * @description
 * @param {number} n
 * @returns {boolean}
 * @example
 * isOdd(1) // true
 * isOdd(2) // false
 * */
declare const isOdd: (n: number) => boolean;

/**
 * @description
 * @param {string} character
 * @returns {boolean}
 * @example
 * isOdd(1) // true
 * isOdd(2) // false
 * */
declare const isVowel: (character: string) => boolean;

export { dig, isConsonant, isEven, isOdd, isVowel };
