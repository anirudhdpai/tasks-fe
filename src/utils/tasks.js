import { BASE_URL } from "../constant/const";
import axios from "axios";

export function get_tasks() {
    const response = axios.get(BASE_URL + '/tasks').then(response => {return response.data}).catch(error => console.log(error));
    return response.data;
}