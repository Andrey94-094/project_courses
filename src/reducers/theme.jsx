const initState = {
  theme: "orange"
}

function reducer(state = initState, action) {
  switch (action.type) {

    case 'THEME_STYLE': {
      return {
        ...state,
        theme: action.payload.theme,
      }
    }
    default: return state;
  }
}

export default reducer;
