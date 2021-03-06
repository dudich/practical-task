const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  if (action.type === 'FETCH_ITEMS') {
    return {
      ...state,
      items: action.payload
    }

  } else if (action.type === 'DELETE_ITEM') {

    state.items.splice(action.payload, 1);
    return {
      ...state,
      items: [...state.items]
    };

  } else if (action.type === 'INCREASE_QUANTITY') {

    ++state.items[action.payload].quantity;
    return {
      ...state,
      items: [...state.items]
    }

  } else if (action.type === 'DECREASE_QUANTITY') {

    --state.items[action.payload].quantity;
    return {
      ...state,
      items: [...state.items]
    }
  } else if (action.type === 'CHANGE_QUANTITY') {

    state.items[action.payload.index].quantity = action.payload.value;
    return {
      ...state,
      items: [...state.items]
    }
  }

  return state;
}