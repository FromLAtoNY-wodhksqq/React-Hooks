import React, {useContext} from 'react';
import {UserContext} from '../b/UserContext';

const Age = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <p>{user}의 나이는 26살</p>
        </div>
    )
}
export default Age;