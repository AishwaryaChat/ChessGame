import Piece from "./piece";
import { queenBlack, queenWhite } from "../constants";
import { isPathClear, isSameCol, isSameDiagonal, isSameRow } from "../helpers";

export default class Queen extends Piece {
  constructor(player) {
    super(player, player === 1 ? queenWhite : queenBlack);
  }

  isMovePossible(src, dest, squares) {
    if (
      !isSameDiagonal(src, dest) &&
      !isSameCol(src, dest) &&
      !isSameRow(src, dest)
    )
      return false;
    const srcToDestPath = this.getSrcToDestPath(src, dest);
    return isPathClear(srcToDestPath, squares);
  }

  getSrcToDestPath(src, dest) {
    let start = src,
      end = dest;
    let incrementBy = 1;
    if (src > dest) {
      start = dest;
      end = src;
    }
    if ((end - start) % 8 === 0) incrementBy = 8;
    if ((end - start) % 9 === 0) incrementBy = 9;
    if ((end - start) % 7 === 0) incrementBy = 7;
    let path = [];
    start += incrementBy;
    for (let i = start; i < end; i += incrementBy) {
      path.push(i);
    }
    return path;
  }
}
