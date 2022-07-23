import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://bhagidari.herokuapp.com' : 'http://localhost:4001';

export default axios.create({
    baseURL
});