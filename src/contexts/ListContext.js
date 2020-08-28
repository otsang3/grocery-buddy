import React, { createContext, useState } from 'react';

export const ListContext = createContext();

function ListContextProvider() {

    const [state, setState] = useState([])

    return(
        <ThemeContext.Provider value={state}>

        </ThemeContext.Provider>
    )

}

export default ListContextProvider;

