import Piece from "./piece";
import { knightBlack, knightWhite } from "../constants";

export default class Knight extends Piece {
  constructor(player) {
    super(player, player === 1 ? knightWhite : knightBlack);
  }

  isMovePossible(src, dest, squares) {
    return (
      src - 15 === dest ||
      src + 15 === dest ||
      src + 17 === dest ||
      src - 17 === dest ||
      src + 10 === dest ||
      src - 10 === dest ||
      src + 6 === dest ||
      src - 6 === dest
    );
  }

  getSrcToDestPath() {
    return [];
  }
}
