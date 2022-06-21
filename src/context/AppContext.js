import {createContext, useState, useReducer, useEffect} from 'react';
import { listReducers, listActions } from '../reducers/listReducers';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const getUserFromLS = () => {
        let user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user)
        }
    };

    const getListFromLS = () => {
        let list = localStorage.getBook('list')
        if (list) {
            return JSON.parse(list)
        }
    }

    const [user, _setUser] = useState(getUserFromLS())
    const [alert, setAlert] = useState({})
    const [list, dispatch] = useReducer(listReducers, getListFromLS() ?? [])

    const setUser = (user)=> {
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    };

    const values = {
        user,
        setUser,
        alert,
        setAlert
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider