import React from 'react';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
