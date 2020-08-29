import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';

function Form() {

    const [value, setValue] = useState("")

    const listContext = useContext(ListContext)

    const handleClick = () => {

        addListItem(value);

        setValue("")
    }

    const { state, addListItem } = listContext
    
    return(
        <div>
            <input 
            onChange={(event) => setValue(event.target.value)}
            value={value}
            />
            <button onClick={() => handleClick()}>Add</button>
            <p>{state}</p>
        </div>
    )
}

export default Form;