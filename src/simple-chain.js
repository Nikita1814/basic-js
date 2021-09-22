import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain : '' ,
  getLength() {
    return this.chain.match(/\(.*\)/)

  },
  addLink(value) {
    if(this.chain.length === 0){
      this.chain = this.chain + (`( ${value} )`)
    } else 
    {this.chain = this.chain + (`~~( ${value} )`)}
    return this
  },
  removeLink(position ) { 
    if(this.chain.split('~~').length < position || (position instanceof Number) === false || !Number.isInteger(position) === false){throw new Error("You can't remove incorrect link!")}
    this.chain = this.chain.split('~~')

    this.chain.splice((position-1), 1)
 
    this.chain = this.chain.join('~~')
   return this
  },
  reverseChain() {
   this.chain = this.chain.split('~~').reverse().join('~~')
   return this
  },
  finishChain() {
  return this.chain
  
  }
};
