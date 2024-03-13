"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  dig: () => dig,
  isConsonant: () => isConsonant,
  isEven: () => isEven,
  isOdd: () => isOdd,
  isVowel: () => isVowel
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dig,
  isConsonant,
  isEven,
  isOdd,
  isVowel
});
