const initState = {
  isLoading: false,
  directions: [],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'SUCCES_FETCH_DIRECTIONS': {
      return {
        ...state,
        isLoading: false,
        directions: action.payload.directions,
      }
    }
    case 'START_FETCH_DIRECTIONS': {
      return { ...state, isLoading: true }
    }
    case 'FAILED_FETCH_DIRECTIONS': {
      return { ...state, isLoading: false }
    }
    case 'ADD_DIRECTION': {
      const Directions = [...state.directions];
      Directions.push(action.payload.direction);
      const newDirections = [...state.directions];
      return {
        ...state,
        directions: newDirections,
        directions: Directions,
      }
    }

    case 'REM_DIRECTION': {
      const country = action.payload.country;
      const newDirectionsOne = [...state.directions];
      return {
        ...state,
        directions: newDirectionsOne.filter(item => item.country !== country),
      }
    }
    case 'DEL_DIRECTION': {
      const id = action.payload.id;
      const newDirections = [...state.directions];
      return {
        ...state,
        directions: newDirections.filter(item => item.id !== id),
      }
    }

    default: return state;
  }
}

export default reducer;
