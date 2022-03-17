import React from 'react';
import { useParams } from 'react-router-dom';


const User = () => {
    let params = useParams()
    return (
        <div>
            <div className="text-9xl">
                hello {params.userId}
            </div>
        </div>
    )
};

export default User;