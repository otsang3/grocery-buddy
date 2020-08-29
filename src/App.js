import React from 'react';
import Form from './components/Form';
import ListContextProvider from './contexts/ListContext';

function App() {
  return (
    <div>
      <ListContextProvider>
        <Form/>
      </ListContextProvider>
      
    </div>
  );
}

export default App;
