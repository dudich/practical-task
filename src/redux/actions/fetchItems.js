import axios from 'axios';

const fetchItems = () => dispatch => {
  axios.get(`https://5b3f1866c3c3fb0014742880.mockapi.io/api/v1/items`)
    .then(res => {
      const items = res.data;
      dispatch({ type: 'FETCH_ITEMS', payload: items })
    })
    .catch(() => alert('Something went wrong! Try again'));
};

export default fetchItems;