import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
export const handleFetch = async(request: AxiosRequestConfig)=>{
    const response = await axios(request);
    handleError(response)
    return response
}

export const handleError = (response:AxiosResponse)=>{
    if(!response.status.toString().match(/^2/)) throw Error(response.status.toString())
    return response
}