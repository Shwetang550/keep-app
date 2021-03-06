
//   Develped by - Shwetang
//   GitHub profile - https://github.com/Shwetang550 

import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    return ( 
        <>
            <div className="note">
                <h1 style={{fontWeight: "bolder"}}>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className="btn" onClick={() => props.onDelete(props.id)}>
                    <DeleteOutlineIcon className="deleteIcon" />
                </button>
            </div>
        </>
    );
}
 
export default Note;