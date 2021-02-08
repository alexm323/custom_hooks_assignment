import  {useState} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';

const useAxios = (baseURL) => {
    const [responses,setResponses] = useState([]);
    const getResponse = async (urlSupplement="") => {
            console.log(typeof(urlSupplement))
            console.log(`${baseURL}${urlSupplement}`)
            if(typeof(urlSupplement) === 'string'){
                const res = await axios.get(`${baseURL}${urlSupplement}`)
            setResponses(responses => [...responses,res.data])
            } else{
                const res = await axios.get(`${baseURL}`)
            setResponses(responses => [...responses, res.data])
            }
            
    }
    return [responses,getResponse]

}

export default useAxios;