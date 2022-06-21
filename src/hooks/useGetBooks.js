import { useEffect, useState } from 'react';
import apiBook from '../api/apiBook';
import { CancelToken } from 'apisauce';
import apiBook from '../api/apiBook';

export default function useBooks(book) {
    const [books, setBooks] = useState({});

    useEffect(
        () => {
            const source = CancelToken.source()
            book ?
            (async() => {
                const response = await apiBook.getBook(title, source.token);
                setBooks(response)
            })
        :
            (async() => {
                const response = await apiBook.getBook(source.token)
                setBooks(response)
            })
        return () => {source.cancel()}
        },
        [book]
    )
    return books
};