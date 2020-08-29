import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListItem(props) {

    const initialState = {
        text: props.item,
        editToggle: false
    }

    const [state, setState] = useState(initialState);

    const listContext = useContext(ListContext);

    const { amendListItem } = listContext;

    let buttonDisplay = "";

    if (state.editToggle) {
        buttonDisplay = "Save"
    } else {
        buttonDisplay = "Edit"
    }

    const handleToggle = () => {

        if (state.editToggle) {
            amendListItem(state.text, props.id)
        }

        setState(prevState => {
            return {...prevState, editToggle: !prevState.editToggle}
        })
    
    }

    const handleChange = (string) => {

        setState(prevState => {
            return {...prevState, text: string}
        })
    }

    return(
        <ul>
            {state.editToggle ? 
            <input value={state.text} onChange={(event) => handleChange(event.target.value)}
            /> 
            : 
            <li>{props.item}</li>}
            
            <button onClick={() => handleToggle()}>{buttonDisplay}</button>
            <button>Delete</button>
        </ul>
    )
}

export default ListItem;