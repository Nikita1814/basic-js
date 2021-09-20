import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let variantArr = []
  let numArr = n.toString().split('')
  console.log(numArr)
  for (let i = 0; i < numArr.length; i++){
    variantArr.push(Number(numArr.filter((e, index, ) =>{ return index !== i}).join('')))
  }
 return variantArr.sort((a,b) =>a-b)[variantArr.length - 1]
}
