import { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import apiUser from '../api/apiUser';
import { AppContext } from '../Context/AppContext';

export default function useCreateUser() {
    const { user, setAlert} = useContext(AppContext)

    useEffect(
        () => {
            let response

            const source = CancelToken.source()
            if (user?.email) {
                (async() => {
                    response = await apiUser.postUser(user.token, user, source.token)
                    if (response) {
                        setAlert({'msg': `User: ${user.name} has been created`, cat:'success'})
                    } else if (response === false && response !== undefined) {
                        setAlert({'msg': "Please reauthorize your account", cat:'warning'})
                    }
                })
            }
            return () => {source.cancel()}
        },
        [user]
    )
};