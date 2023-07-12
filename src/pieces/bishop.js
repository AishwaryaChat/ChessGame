import Piece from "./piece";
import { bishopWhite, bishopBlack } from "../constants";
import { isPathClear, isSameDiagonal } from "../helpers";

export default class Bishop extends Piece {
  constructor(player) {
    super(player, player === 1 ? bishopWhite : bishopBlack);
  }

  isMovePossible(src, dest, squares) {
    if (!isSameDiagonal(src, dest)) return false;
    const srcToDestPath = this.getSrcToDestPath(src, dest);
    return isPathClear(srcToDestPath, squares);
  }

  getSrcToDestPath(src, dest) {
    let start = src,
      end = dest;
    let incrementBy = 7;
    if (src > dest) {
      start = dest;
      end = src;
    }
    if ((end - start) % 9 === 0) incrementBy = 9;
    let path = [];
    start += incrementBy;
    for (let i = start; i < end; i += incrementBy) {
      path.push(i);
    }
    return path;
  }
}
