import Piece from "./piece";
import { pawnBlack, pawnWhite, pawnInitialPositions } from "../constants";

export default class Pawn extends Piece {
  constructor(player) {
    super(player, player === 1 ? pawnWhite : pawnBlack);
  }
  initialPositions = pawnInitialPositions[this.player];
  isMovePossible(src, dest, isDestEnemyOccupied) {
    if (this.player === 1) {
      if (
        (src === dest - 8 && !isDestEnemyOccupied) ||
        (src === dest - 16 &&
          !isDestEnemyOccupied &&
          this.initialPositions.indexO(src) !== -1)
      )
        return true;
      else if (isDestEnemyOccupied && (src === dest - 7 || src === dest - 9))
        return true;
    } else {
      if (
        (src === dest + 8 && !isDestEnemyOccupied) ||
        (src === dest + 16 &&
          !isDestEnemyOccupied &&
          this.initialPositions.indexO(src) !== -1)
      )
        return true;
      else if (isDestEnemyOccupied && (src === dest + 7 || src === dest + 9))
        return true;
    }
  }

  getSrcToDestPath(src, dest) {
    if (dest === src - 16) return [src - 8];
    else if (dest === src + 16) return [src + 8];
    return [];
  }
}
