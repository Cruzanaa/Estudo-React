import React, {Component} from 'react';

import './estilo.css';

class Button extends Component{
    render(){
        return <button class={this.props.classe}
        >{this.props.nome}</button>;
    }
}

export default Button;