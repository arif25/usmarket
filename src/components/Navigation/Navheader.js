import React from 'react';
import logo from '../Assets/images/logo.png';

function Navheader(){
    return <div className="navHeader">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    </div>
}
export default Navheader;