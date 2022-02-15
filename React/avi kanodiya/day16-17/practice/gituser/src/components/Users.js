import React, { useState, useEffect } from 'react'
const url = 'http://api.github.com/users';

const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUSer] = useState('default user')

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json()
                } else {
                    setIsLoading(false);
                    setIsError(true)
                    throw new Error(res.statusText)
                }
            })
            .then((user) => {
                setUSer(user)
                setIsLoading(false)
            })
            .catch((err) => console.log(err));
    }, [])

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (isError) {
        <div>
            <h1>Error...</h1>
        </div>
    }
    return (
        <div>
            <ul>
                {
                    user.map(user => <li>{user.login}</li>)
                }
            </ul>
        </div>
    )
}

export default Users
