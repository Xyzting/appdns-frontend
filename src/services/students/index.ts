import axios from "..";
import { StatusCode } from "../types";
import { Students } from "./types";

const url = "/students"
export default {
  get: (): Promise<StatusCode<Students>> => {
    return axios.get(`${url}`);
  },
}