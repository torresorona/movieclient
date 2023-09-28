import axios from 'axios';

export default axios.create({
    baseURL : process.env.BASE_URL || "https://moviesapi-399720.uc.r.appspot.com"
});
