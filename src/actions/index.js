//En este file almaceno todas las actions juntas, despues exporto las que quiera y en el reducer las importo individualmente

const setBoard = board => ({
  type: "setBoard",
  payload: board
});

const setCellValue = (value, validValue) => ({
  type: "setCellValue",
  payload: { value, validValue }
});

const setSelected = (region, cell, value, editable) => ({
  // Es una buena practica tenes las acciones de los reducers como constantes
  type: "setSelected",
  payload: { region, cell, value, editable }
});

export { setBoard, setCellValue, setSelected };
