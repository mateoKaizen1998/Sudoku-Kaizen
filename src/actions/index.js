//En este file almaceno todas las actions juntas, despues exporto las que quiera y en el reducer las exporto individualmente

const onCellSelect = (row, column) => ({
  type: "selectCell",
  payload: { row, column }
});

const setBoard = board => ({
  type: "setBoard",
  payload: board
});

export { setBoard, onCellSelect };
