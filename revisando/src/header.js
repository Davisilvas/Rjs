import React from 'react';
import Menu from './Menu';

function Header(props) {
    return(
        <header className="header">
            <h1 className="tilte">{props.name}</h1>
            <Menu items = {props.items}></Menu>
    {/* Ao invés de exportar duas coisas, já usei o componente criado dentro deste outro Componente que está sendo exportado. Logo quando o Pai for importado, o Filho também é. */}
        </header>
    )
}



export default Header;

