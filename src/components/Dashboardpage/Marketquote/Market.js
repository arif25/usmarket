import React from 'react';
import { Link } from "react-router-dom";
import APImarkets from '../APIuseEffect/APImarkets';

function Market(){
    return <section className="secMarket">
        <div className="marketTitle">
            <div className="marketTitleHeadline">
                <h2>Markets</h2>
                <h5>
                    <Link to="/markets" className="navLinks navMarkets"><span>All</span></Link>
                </h5>
            </div>
            <div className="marketinfoDropdown">
                <ul>                    
                    <APImarkets />
                </ul>
            </div>
        </div>
    </section>
}
export default Market;


