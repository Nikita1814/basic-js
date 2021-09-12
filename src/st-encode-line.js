import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let codeArr = str.split('')
  let codeStr = ''
  let count = 1
for( let i = 0; i < codeArr.length; i++){
  if (codeArr[i + 1] === codeArr[i]){
    count = count + 1
  } else {
  codeStr += `${count}${codeArr[i]}`
  count = 1  
  }
  }
  codeStr = codeStr.replace(/1/g, '')
  return codeStr
}
