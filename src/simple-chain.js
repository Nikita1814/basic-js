import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: "",
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      this.chainArr.length < position ||
      position < 1 ||
      typeof position !== "number" ||
      Number.isInteger(position) === false
    ) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainArr.reverse();

    return this;
  },
  finishChain() {
    this.chain = this.chainArr.join("~~");
    this.chainArr = [];
    return this.chain;
  },
};
