import Piece from "./piece";
import { rookBlack, rookWhite } from "../constants";
import { isPathClear, isSameCol, isSameRow } from "../helpers";

export default class Rook extends Piece {
  constructor(player) {
    super(player, player === 1 ? rookWhite : rookBlack);
  }

  isMovePossible(src, dest, squares) {
    if (!isSameCol(src, dest) && !isSameRow(src, dest)) return false;
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
    let path = [];
    start += incrementBy;
    for (let i = start; i < end; i += incrementBy) {
      path.push(i);
    }
    return path;
  }
}
