import apiClient from './clientBasicAuth';

const endpoint = '/login'

export const getUser = async (email, password, cancelToken) => {
    if (Response.ok) {
        user = response.data
    } else if (response.status === 401) {
        error = "Invalid e-mail/password combination"
    } else {
        error = "An unexpected error has occured. Please try again later"
    }

    return {
        error, 
        user
    };
};
