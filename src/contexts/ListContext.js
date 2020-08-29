import React, { createContext, useState } from 'react';

export const ListContext = createContext();

function ListContextProvider(props) {

    const [state, setState] = useState([]);

    const addListItem = (string) => {

        setState(prevState => [
            ...prevState, string
        ])
    };

    const amendListItem = (string, index) => {

        setState(prevState => {
            prevState[index] = string;
            return [...prevState]
        })
    }

    const deleteListitem = (index) => {

        setState(prevState => {
            prevState.splice(index, 1)
            return [...prevState]
        })
    }

    return(
        <ListContext.Provider value={{ 
            state: state, 
            addListItem: addListItem, 
            amendListItem: amendListItem, 
            deleteListitem: deleteListitem
            }}>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListContextProvider;

