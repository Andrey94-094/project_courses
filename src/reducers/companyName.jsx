const initState = {
  companyName: " ",
}

function reducer(state = initState, action) {
  switch (action.type) {

    case 'COMPANY_NAME_DIRECTIONS': {
      const Name = action.payload.Name;
      return {
        ...state,
        companyName: (Name === undefined ? action.payload.companyName : Name),
      }
    }
    default: return state;
  }
}

export default reducer;
