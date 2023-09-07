import axios  from 'axios';
import { config } from './config';

const AxiosCustomInstance = axios.create({
	baseURL: config.base_url
})

export default AxiosCustomInstance