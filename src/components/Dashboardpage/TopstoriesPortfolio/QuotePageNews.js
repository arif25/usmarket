import React from 'react';
import { Link } from "react-router-dom";
import QuotePageApinews from '../../Dashboardpage/APIuseEffect/QuotePageApinews';

function QuotePageNews(){
    return <section className="QuotePage_sectopstories" id="QuotePage_sectopstories">
        <div className="titleTopstories">
            <h3>Top Stories</h3>
            <h4><Link to="/news" className="navLinks navNews">Summery</Link></h4>
        </div>
        <div className="topstoriesContent">
            <ul> 
                <QuotePageApinews />
            </ul>
        </div>
    </section>
}
export default QuotePageNews;