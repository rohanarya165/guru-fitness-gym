import { API_CONFIG } from "../Constant/ApiDec";
import axios from "axios";

export function AddNewServices(body) {
    const URL = API_CONFIG.POST_PACKAGE;
    return axios.post(URL, body);
  }