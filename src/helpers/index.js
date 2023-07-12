import rowDictionary from "../dictionaries/row.json";
import colDictionary from "../dictionaries/column.json";

export const isPathClear = (path, squares) => {
  path.reduce((acc, square) => !squares[square] && acc, true);
};

export const isSameRow = (src, dest) =>
  rowDictionary[src] && rowDictionary[src][dest];
export const isSameCol = (src, dest) =>
  colDictionary[src] && colDictionary[src][dest];

