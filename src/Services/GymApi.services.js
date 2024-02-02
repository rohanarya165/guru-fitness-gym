import { API_CONFIG } from "../Constant/ApiDec";
import axios from "axios";

export function AddNewServices(body) {
    const URL = API_CONFIG.POST_PACKAGE;
    return axios.post(URL, body);
  }

  export function getAllPackages() {
    const URL = API_CONFIG.POST_PACKAGE+`s`;
    return axios.get(URL);
  }

  export function deletePackage(id) {
    const URL = API_CONFIG.POST_PACKAGE+`/${id}`;
    return axios.delete(URL);
  }

  export function updatePackage(id , body) {
    const URL = API_CONFIG.POST_PACKAGE+`/${id}`;
    return axios.put(URL, body);
  }

  export function getAllUsers() {
    const URL = API_CONFIG.USER_URL + `/find-all`;
    return axios.get(URL);
  }

  export function getAllUsersFeed() {
    const URL = API_CONFIG.USER_URL + `/feed`;
    return axios.get(URL);
  }
  export function getAllUsersActivity() {
    const URL = API_CONFIG.ACTIVITY + `/activity`;
    return axios.get(URL);
  }

  export function getUserById(id) {
    const URL = API_CONFIG.USER_URL + `/${id}`;
    return axios.get(URL);
  }

  export function addNewUser(body) {
    const URL = API_CONFIG.USER_URL ;
    return axios.post(URL, body);
  }

  export function userIn(id) {
    const URL = API_CONFIG.USER_IN+id ;
    return axios.post(URL);
  }

  export function deleteUser(id) {
    const URL = API_CONFIG.USER_URL+"/"+id ;
    return axios.delete(URL);
  }

  export function update(body, id) {
    const URL = API_CONFIG.USER_URL+"/"+id ;
        return axios.put(URL, body);
  }

