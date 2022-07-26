import React from "react";

function Menu(props){

    const listItems =props.items.map((item, index)=>
        <li key={index}>{item}</li>);
    
    return (<ul className="menu">
        {listItems}
    </ul>)
}

export default Menu;