import React from 'react';
import { Link } from "react-router-dom";
import QuoteDynamic from '../Chart/QuoteDynamic';
import testQuoteDynamic from '../Chart/QuoteDynamic';
function Quote(){
    return <section className="secquote">
        <div className="quoteTitle">
            <h2>Quote</h2>
            <h5><Link to="/quote" className="navLinks navCalender">All</Link></h5>
        </div>
        <div className="bxSecQuote">
            <div className="quoteGraph">
                <QuoteDynamic />
            </div>
        </div>

    </section>
}
export default Quote;