import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
if (!Array.isArray(arr)){
  throw new Error("\'arr\' parameter must be an instance of the Array!")
} 
let nuArr = arr.map((e) => e = e)

for (let i = 0; i< nuArr.length; i++){
if (nuArr[i] === '--double-next' && typeof nuArr[i + 1] === 'number' ){
  nuArr[i] = nuArr[i + 1]
}else if (nuArr[i] === '--double-prev' && typeof nuArr[i - 1] === 'number'){
  nuArr[i] = nuArr[i - 1]
}else if( nuArr[i] === '--discard-prev' && typeof nuArr[i -1] === 'number'){
  nuArr.splice(i-1,1)
} else if(nuArr[i] === '--discard-next' && typeof nuArr[i + 1] === 'number'){
  nuArr.splice(i+1,1)
}
}

return nuArr.filter((e) => {
if (e !=='--discard-next' &&
e !== '--discard-prev' && 
e !=='--double-prev'  &&
e !=='--double-next'){
return true 
} else {return false}
})

}
 
