import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = () => {
    const [user] = useAuthState(auth)
    const [token, setToken] = useState('')
    useEffect(() => {
        if (user?.displayName) {
            const name = user.displayName;
            const email = user.email;
            const currentUser = { name, email }
            fetch(`https://frozen-scrubland-19208.herokuapp.com/user?email=${user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json())
                .then(data => {
                    setToken(data.token)
                    localStorage.setItem('accessToken', data.token)
                })
        }
    }, [user?.displayName, user?.email])
    return [token]
};

export default useToken;