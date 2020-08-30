import React from 'react';
import Form from './components/Form';
import ListContextProvider from './contexts/ListContext';
import List from './components/List';

function App() {
  return (
    <div className="app">
      <ListContextProvider>
        <div className="content">
          <h2 style={{textAlign: "center"}}>Grocery Buddy</h2>
          <Form/>
          <List/>
        </div>
      </ListContextProvider>
    </div>
  );
}

export default App;
