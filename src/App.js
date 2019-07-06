import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Cabecario from './components/Cabecario';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Cabecario />

          <Button nome="Enviar" classe="padrao"/>
          <Button nome="Olá mundo" classe="sucesso"/>
          <Button nome="Tecnogueto" classe="cancelar"/>
      </Fragment>
    );
  }
}

export default App;
