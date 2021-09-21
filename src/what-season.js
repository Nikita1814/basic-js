import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (arguments.length < 1) {
    return "Unable to determine the time of year!";
  } else if (
    Object.keys(date).length === 0 &&
    date instanceof Date &&
    !isNaN(date)
  ) {
    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:
        return "winter";
        break;
      case 2:
      case 3:
      case 4:
        return "spring";
        break;

      case 5:
      case 6:
      case 7:
        return "summer";
        break;

      case 8:
      case 9:
      case 10:
        return "autumn";
        break;
    }
  } else {
    throw new Error("Invalid date!");
  }
}
