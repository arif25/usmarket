import React from "react";
import iconForex from '../../Assets/images/iconForex.png';
import iconTreasury_Yield from '../../Assets/images/iconTreasury_Yield.png';

function ForexUsd(){
    return(
        <>
        <div className="pfWsListContent secMarkets secForexUsd">
            <div className="bxForexTable">
                <table>
                    <thead>
                        <tr>
                            <td>Months</td>
                            <td>Durations</td>
                            <td>Current Day Yields (%)</td>
                            <td>Previous Day Yields (%)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>0.25</td>
                            <td>0.12</td>
                            <td>0.11</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>0.50</td>
                            <td>0.27</td>
                            <td>0.28</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>1.00</td>
                            <td>0.48</td>
                            <td>0.46</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>1.98</td>
                            <td>0.92</td>
                            <td>0.90</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                        <tr>
                            <td>84</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                        <tr>
                            <td>120</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                        <tr>
                            <td>240</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                        <tr>
                            <td>360</td>
                            <td>0.08</td>
                            <td>0.04</td>
                            <td>0.04</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default ForexUsd; 