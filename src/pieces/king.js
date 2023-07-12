import Piece from "./piece";
import { kingWhite, kingBlack } from "../constants";

export default class King extends Piece {
  constructor(player) {
    super(player, player === 1 ? kingWhite : kingBlack);
  }
  isMovePossible(src, dest) {
    return (
      src + 8 === dest ||
      src - 8 === dest ||
      src + 9 === dest ||
      src - 9 === dest ||
      src + 7 === dest ||
      src - 7 === dest ||
      src + 1 === dest ||
      src - 1 === dest
    );
  }

  getSrcToDestPath() {
    return [];
  }
}
