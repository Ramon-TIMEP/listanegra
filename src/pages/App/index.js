import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App(){
    return (
        <div className="App">
      <header className="App-header">
        <h1>Lista Negra</h1>  

        <div>
          <h2> <Link to="/cadastrar"> Cadastrar </Link> </h2>
        </div>

        <div>
          <h2> <Link to="/consultar"> Consultar </Link> </h2>
        </div>
      </header>
    </div>
    );
}

export default App;