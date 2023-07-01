import axios from 'axios';

export default axios.create({
	baseURL: process.env.AXIOS_BASE_URL
});