const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  if (action.type === 'GET_ITEMS') {
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
  }

  return state;
}