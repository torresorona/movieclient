import axios from 'axios';

export default axios.create({
    baseURL : `${procees.env.BASE_URL}`
});
