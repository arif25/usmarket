import React from 'react';
import { Link } from "react-router-dom";
import Apinews from '../APIuseEffect/Apinews';

function Topstories(){
    return <section className="sectopstories" id="sectopstories">
        <div className="titleTopstories">
            <h3>Top Stories</h3>
            <h4><Link to="/news" className="navLinks navNews">Summery</Link></h4>
        </div>
        <div className="topstoriesContent">
            <ul> 
                <Apinews />
            </ul>
        </div>
    </section>
}
export default Topstories;