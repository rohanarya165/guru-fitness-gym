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