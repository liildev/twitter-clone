import React from 'react';
import './Btn.scss'
const Btn = ({children}) => {
    return (
        <button className="btn">{children}</button>
    );
}

export default Btn;
