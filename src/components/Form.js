import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';
import { FaCartPlus } from 'react-icons/fa';

function Form() {

    const [value, setValue] = useState("")

    const listContext = useContext(ListContext)

    const handleClick = () => {

        addListItem(value);

        setValue("")
    }

    const { addListItem } = listContext
    
    return(
        <div className="form">
            <input 
            onChange={(event) => setValue(event.target.value)}
            value={value}
            placeholder="e.g. bread"
            />
            <button onClick={() => handleClick()}><FaCartPlus size={16}/></button>
        </div>
    )
}

export default Form;