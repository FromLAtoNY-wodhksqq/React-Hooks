import React, {useContext} from 'react';
import {UserContext} from '../b/UserContext';

const Name = () => {
    const user = useContext(UserContext);
    return(
        <div>
            <p>{user}의 이름은 {user}</p>
        </div>
    )
}
export default Name;