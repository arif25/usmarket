import React, {useState} from 'react';
import dropdownicon from '../Assets/images/dropdownIcon.png';

function Showhidetoggle(){
    const [show, setShow]=useState(false);
    return(
        <>
            {
                show?
                    <div className="accontDetailsToggle">
                        <div className="userIconTitle">
                            <h4>Jon Doe</h4>
                        </div>
                        <ul>
                            <li>Subscriptions</li>
                            <li>Notifications</li>
                            <li>My Profile</li>
                            <li>Contacts</li>
                            <li>Files</li>
                            <li>Social</li>
                            <li>My Stocks</li>
                            <li>Privacy Settings</li>
                            <li>Delete Account</li>
                        </ul>
                    </div>
                :null
            }
            <div onClick={()=>setShow(!show)} className="dropdownIcon">
                <p>Jon Doe 
                <img src={dropdownicon} alt="" /></p>
            </div>
        </>
    );
}
export default Showhidetoggle;

