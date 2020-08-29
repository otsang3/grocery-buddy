import React from 'react';

function ListItem(props) {

    return(
        <ul>
            <li>{props.item}</li>
            <button>Edit</button>
            <button>Delete</button>
        </ul>
    )
}

export default ListItem;