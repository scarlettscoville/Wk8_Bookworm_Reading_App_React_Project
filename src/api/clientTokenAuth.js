import {create} from "apisauce";


const apiClient = (cancelToken, token) =>create({
    baseURL:"https://cae-bootstore.herokuapp.com/",
    headers:{
        Authorization: "Bearer "+token
    },
    cancelToken
})

export default apiClient