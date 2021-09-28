import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = []
  result.push(String(str))
 
 if(options.hasOwnProperty('addition')){
   let additionsResult = []
   additionsResult.push(String(options.addition))
  
   if(options.additionRepeatTimes && options.additionRepeatTimes > 1){
     for (let i = 1; i < options.additionRepeatTimes; i++){
       additionsResult.push(String(options.addition))  
      
   }
 }
   if(options.additionSeparator){
     additionsResult = additionsResult.join(`${String(options.additionSeparator)}`)
  
   } else{
     additionsResult = additionsResult.join('|')
  
   }
   result[0] = result[0].concat(additionsResult)
   
 }
 
 
  if (options.repeatTimes && options.repeatTimes > 1 ){
  for (let i = 1; i < options.repeatTimes; i++){
  result.push(result[0])  
  }
}
  if(options.separator){
    return result.join(`${String(options.separator)}`)
  } else{
  return result.join('+')  
  }
 
}
