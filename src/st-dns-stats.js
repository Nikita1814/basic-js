import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains ) {
  let stats = {}
        let temp
        for (let i = 0;  i<domains.length; i++){
        if(typeof domains[i] === 'string'){
          temp = domains[i].split('.').reverse()
          temp.push('1')
          temp.reduce((prev,next) => {
           if(!stats.hasOwnProperty(`.${prev}`)){
            stats[`.${prev}`]  = 1
           } else{stats[`.${prev}`]  += 1}
      
          return prev += `.${next}`
          })
        } 
       
        }
        return stats
}
