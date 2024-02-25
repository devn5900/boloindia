import axios, { AxiosResponse } from 'axios'


export const getTopBlogs=async(query:string)=>{

try {
    const res:AxiosResponse= await axios.get(`${process.env.REACT_APP_API_URL}${query}`)
    // console.log(res.data)
    return res.data.data
} catch (error) {
    console.log(error);
//    return new Error
}

}