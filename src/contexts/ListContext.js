import React, { createContext, useState } from 'react';

export const ListContext = createContext();

function ListContextProvider(props) {

    const [state, setState] = useState([]);

    const addListItem = (string) => {

        setState(prevState => [
            ...prevState, string
        ])
    };

    return(
        <ListContext.Provider value={{ state: state, addListItem: addListItem}}>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListContextProvider;

