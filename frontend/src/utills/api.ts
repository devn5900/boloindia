import { AxiosResponse } from "axios";
import { AxiosInstance } from "./exporter";

export const getData=async (query:String) => {
    try {
        const res:AxiosResponse= await AxiosInstance.get(query.toString());
        return res;

    } catch (error) {
        return error;
    }
}