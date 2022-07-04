import axios from 'axios';

const config = {
    mockoonUrl: 'http://127.0.0.1:3000/v1/',
  };

function fetchCartList(){
    return axios.get(`${config.mockoonUrl}cartList`);
}

function fetchCartItem(itemId){
    return axios.get(`${config.mockoonUrl}item/${itemId}`);
}

export {
    fetchCartList,
    fetchCartItem,
}


