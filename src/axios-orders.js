import axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://react-burgerbuilder-98b18.firebaseio.com/'
});

export default instance;