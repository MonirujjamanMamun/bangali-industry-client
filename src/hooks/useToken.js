import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = () => {
    const [user] = useAuthState(auth)
    const [token, setToken] = useState('')
    if (user) {
        const currentUser = { email: user.email }
        fetch(`http://localhost:5000/user?email=${user.email}`, {
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
    return [token]
};

export default useToken;