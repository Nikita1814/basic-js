import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let sOneChars = Array.from(new Set(s1.split("")));
  let reg;
  let commCharCount = 0;
  for (let i = 0; i < sOneChars.length; i++) {
    reg = new RegExp(`${sOneChars[i]}`, `g`);
    if (s1.match(reg) !== null && s2.match(reg) !== null) {
      commCharCount += Math.min(s1.match(reg).length, s2.match(reg).length);
    }
  }
  return commCharCount;
}
