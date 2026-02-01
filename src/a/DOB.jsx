import React, {useContext} from 'react';
import {UserContext} from '../b/UserContext';

const DOB = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <p>{user}의 생일은 2001.04.13</p>
        </div>
    )
}
export default DOB;