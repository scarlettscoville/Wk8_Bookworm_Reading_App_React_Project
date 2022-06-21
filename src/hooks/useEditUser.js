import { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import apiUser from '../api/apiUser';
import { AppContext } from '../Context/AppContext';


export default function useEditUser(user) {
    const { user, setAlert } = useContext(AppContext)

    useEffect(
        () => {
            let response

            const source = CancelToken.source()
            if (user?.id) {
                (async () => {
                    response = await apiUser.putUser(user.token, user.id, user, source.token)
                    if (response) {
                        setAlert({'msg': `${user.name} has been edited`, 'cat':'success'})
                    } else if (response === false && response !== undefined) {
                        setAlert({'msg': "Please reauthorize your account", 'cat':'warning'})
                    }
                })
            }
            return () => { source.cancel() }
        },
        [user, user.id, user.token]
    )
};