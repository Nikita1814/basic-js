import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let field = Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (matrix[i][j - 1] && matrix[i][j - 1].toString() === "true") {
        field[i][j] += 1;
      }
      if (matrix[i][j + 1] && matrix[i][j + 1].toString() === "true") {
        field[i][j] += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][j].toString() === "true") {
        field[i][j] += 1;
      }
      if (matrix[i - 1] && matrix[i - 1][j].toString() === "true") {
        field[i][j] += 1;
      }
      if (
        matrix[i - 1] &&
        matrix[i - 1][j - 1] &&
        matrix[i - 1][j - 1].toString() === "true"
      ) {
        field[i][j] += 1;
      }
      if (
        matrix[i + 1] &&
        matrix[i + 1][j + 1] &&
        matrix[i + 1][j + 1].toString() === "true"
      ) {
        field[i][j] += 1;
      }
      if (
        matrix[i - 1] &&
        matrix[i - 1][j + 1] &&
        matrix[i - 1][j + 1].toString() === "true"
      ) {
        field[i][j] += 1;
      }
      if (
        matrix[i + 1] &&
        matrix[i + 1][j - 1] &&
        matrix[i + 1][j - 1].toString() === "true"
      ) {
        field[i][j] += 1;
      }
    }
  }

  return field;
}
