import React from 'react'

const HandWriting = (props) => {
    return (
        <div className={`font-${props.choice}`}>
            {props.notes}
        
            <div>
                hey
        </div>
        </div>
    )
}

export default HandWriting