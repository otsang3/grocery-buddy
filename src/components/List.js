import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import ListItem from './ListItem'

function List() {

    const listContext = useContext(ListContext);

    const { state } = listContext;

    const renderList = state.map((item, index) => {
        return(
            <ListItem item={item} key={index} id={index}/>
        )
    })

    return(
        <div>
            {renderList}
        </div>
    )
}

export default List;