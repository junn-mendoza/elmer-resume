import React from 'react';
import Main from './Components/MainComponent';
import {Provider} from 'react-redux';
import ConfigureStore  from './redux/store';
import './App.css';


function App() {
  
  const store = ConfigureStore();
  return (
    <Provider store={store}>
        <Main/>
    </Provider>
    
    );
  }
  
  export default App;
