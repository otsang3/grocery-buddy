import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../contexts/ListContext';
import { FaCheck, FaPen, FaTrash } from 'react-icons/fa';

function ListItem(props) {

    useEffect(() => {
        setState({
            text: props.item,
            editToggle: false
        })
    }, [props])

    const initialState = {
        text: props.item,
        editToggle: false
    }

    const [state, setState] = useState(initialState);

    const listContext = useContext(ListContext);

    const { amendListItem, deleteListItem } = listContext;

    let buttonDisplay = null;

    if (state.editToggle) {
        buttonDisplay = <div style={{color: "#32CD32"}}><FaCheck/></div>
    } else {
        buttonDisplay = <div style={{color: "#87CEFA"}}><FaPen/></div>
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
            <input className="listEdit" value={state.text} onChange={(event) => handleChange(event.target.value)}
            /> 
            : 
            <li className="flexbox-1">{props.item}</li>}
            <button className="flexbox-2" onClick={() => handleToggle()}>{buttonDisplay}</button>
            <button className="flexbox-2" onClick={() => deleteListItem(props.id)}><div style={{color: "#C0C0C0"}}><FaTrash/></div></button>
        </ul>
    )
}

export default ListItem;