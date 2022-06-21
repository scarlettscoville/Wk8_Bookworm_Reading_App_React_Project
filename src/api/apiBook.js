import apiClientNoAuth from './clientNoAuth';

const endpoint = '/book'

const getBook = async (cancelToken) => {
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok) {
        books = response.books
    } else {
        error = "An unexpected error has occured. Please try again later"
    }

    return {
        error, 
        books
    };
};

export default {
    getBook,
}