import React from 'react'
import { useParams } from "react-router-dom";

const HandWriting = (props) => {
    const params = useParams();
    return (
        <div className={`font-${params.id} text-3xl bg-white  text-black w-full h-[34rem] p-3`}>
                {params.text}
        </div>
    )

}

export default HandWriting