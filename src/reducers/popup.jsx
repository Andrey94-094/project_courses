const initState = {
  isPopupOpen: false,
}

function reducer(state = initState, action) {
  switch (action.type) {
    case "OPEN_POPUP": {
      return { ...state, isPopupOpen: true }
    }
    case "CLOSE_POPUP": {
      return { ...state, isPopupOpen: false }
    }
    default: return state;
  }
}

export default reducer;

