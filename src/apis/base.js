import axios from 'axios';

const baseURL = process.env.baseURL || 'http://localhost:4001';

console.log(process.env);

export default axios.create({
    baseURL
});