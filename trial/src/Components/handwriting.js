import React from 'react'
import { useParams } from "react-router-dom";

const HandWriting = (props) => {
    const params = useParams();
    return (
        <div className={`font-${props.choice}`}>
            {props.notes}
        
            <div className={`font-${params.id}`}>
                hey 
        </div>
        </div>
    )
}

export default HandWriting