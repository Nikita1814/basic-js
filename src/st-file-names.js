import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let valSet =Array.from(new Set(names))
         console.log (valSet)
         for(let j = 0; j < valSet.length; j++){
         let counter = 0
         for(let i = 0; i< names.length; i++){
           if(valSet[j] === names[i] && counter !== 0){
           names[i] = names[i] + `(${counter})`
           counter++
           } else if ( valSet[j] === names[i] && counter === 0){
             counter++
           }
         }
         counter == 0
        }
         return names
}
