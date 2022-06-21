import apiClientBasicAuth from './clientBasicAuth'
import apiClientTokenAuth from './clientTokenAuth';

const endpoint = '/user'

const getUser = async (email, password, cancelToken) => {
    let error; 
    let user;

    const response = await apiClientBasicAuth(email, password, cancelToken).get('/login')
    if (response.ok) {
        user = response.data
    } else {
        error = "An unexpected error has occured. Please try again later"
    }

    return {
        error, 
        user
    };
};

const postUser = async (data, token, cancelToken) => {
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint)
    return response.ok
};

const putUser = async (user_id, data, token, cancelToken) => {
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+user_id, data)
    return response.ok
};

const removeUser = async (user_id, token, cancelToken) => {
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+user_id)
    return response.ok
};

export default {
    getUser,
    postUser,
    putUser,
    removeUser
}