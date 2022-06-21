import { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import apiUser from '../api/apiUser';
import { AppContext } from '../Context/AppContext';

export default function useDeleteUser(user) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        () => {
            let response

            const source = CancelToken.source()
            if (user?.id) {
                (async() => {
                    response = await apiUser.removeUser(user.token, user.id, source.token)
                    if (response) {
                        setAlert ({'msg': `User ${user.name} has been permantely deleted`, cat: 'success'})
                    } else if (response === false && response !== undefined) {
                        setAlert({'msg': "Please reauthorize your account", cat:'warning'})
                    }
                })
            }
            return () => (source.cancel())
        },
        [user, user.token]
    )
};