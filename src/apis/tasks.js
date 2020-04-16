import axiosService from './../commons/Service/axiosService';
import { API_URL } from './../constants';

const endpoint = 'tasks';

// http:localhost:3000/tasks   METHOD: GET
export const getListTask = () => {
   return axiosService.get(`${API_URL}/${endpoint}`);
};
