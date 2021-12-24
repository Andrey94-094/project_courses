const initState = {
  footerblock: [
    { id: 0, title: "Заголовок", text: "Образец текста нижнего колонтитула" },
    { id: 1, title: "Заголовок", text: "Образец текста нижнего колонтитула" },
    { id: 2, title: "Заголовок", text: "Образец текста нижнего колонтитула" },
  ],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'FOOTER_BLOCK_FETCH_DIRECTIONS': {
      const newfooterblock = [...state.footerblock];
      newfooterblock.push(action.payload.footerblocks);
      return {
        ...state,
        footerblock: newfooterblock,
      }
    }
    case 'DEL_FOOTER': {
      const id = action.payload.id;
      const newFooter = [...state.footerblock];
      const delFooter = newFooter.filter(item => item.id !== id)
      return {
        ...state,
        footerblock: delFooter,
      }
    }

    default: return state;
  }
}

export default reducer;
