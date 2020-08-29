import React from 'react';
import Form from './components/Form';
import ListContextProvider from './contexts/ListContext';
import List from './components/List';

function App() {
  return (
    <div>
      <ListContextProvider>
        <Form/>
        <List/>
      </ListContextProvider>
    </div>
  );
}

export default App;
