import Navheader from './Navheader';
import Navbody from './navbody';
import navmenuicon from '../Assets/images/navmenu.png';
import React, {useState} from 'react';

function Navigation(){
    const [navshow, setShow]=useState(false);
    return(
        <>
            <div className="desktopnav">
                <Navheader />
                <Navbody />
            </div>
            {
                navshow?
                    <div className="navopenview">
                    <Navheader />
                    <Navbody />
                    </div>
                :null
            }
            <div onClick={()=>setShow(!navshow)}>                
                <div className="navmenu">
                    <img src={navmenuicon} alt="" />
                </div>
            </div>
        </>
    );
}
export default Navigation;