import apiClient from './clientBasicAuth';

const endpoint = '/login';

export const getUser= async (email, password, cancelToken)=>{
    let error;
    let user;

    const response = await apiClient(email, password, cancelToken).get(endpoint)
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="Invalid email/password combination."
    }else{
        error = "An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        user
    }

}