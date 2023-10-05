import axiosInstance from '../http'
import { endPoints } from '../../constants/config'
const someApiCall = async () => {
    return await axiosInstance.get(endPoints?.someEndPoint)
}

export {
    someApiCall,
}