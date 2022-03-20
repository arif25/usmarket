import React from "react";
import iconForex from '../../Assets/images/iconForex.png';
import iconTreasury_Yield from '../../Assets/images/iconTreasury_Yield.png';

function ForexUsd(){
    return(
        <>

        <div className="ForexUsd">
            {/* <h3>Forex (Usd)</h3>
            <div className="marketsBtnsBack" id="marketsBtnsBack">
                <a href="#">Back</a>
            </div> */}
            <div className="marketTopTitles">
                <h3>Markets</h3>
                <div className="marketsBtns marketsBtnsBack" id="marketsBtnsBack">
                    <a href="#">Back</a>
                </div>
            </div>
        </div>

        <div className="pfWsListContent secMarkets secForexUsd">
            <div className="itemMarketTitle">
                <h4>Forex (Usd)</h4>
            </div>
            <div className="bxForexTable">
                <table>
                    <thead>
                        <tr>
                            <td>Currency</td>
                            <td>Last</td>
                            <td>Change %</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>usd - eu euro</td>
                            <td>0.87</td>
                            <td>-0.15</td>
                        </tr>
                        <tr>
                            <td>usd - japan yen</td>
                            <td>114.13</td>
                            <td>-0.48</td>
                        </tr>
                        <tr>
                            <td>usd - uk pounds</td>
                            <td>0.73</td>
                            <td>-0.18</td>
                        </tr>
                        <tr>
                            <td>usd - switzerland francs</td>
                            <td>0.91</td>
                            <td>-0.43</td>
                        </tr>
                        <tr>
                            <td>usd - canada dollars</td>
                            <td>1.25</td>
                            <td>-0.14</td>
                        </tr>
                        <tr>
                            <td>usd - australia dollars</td>
                            <td>1.37</td>
                            <td>-0.26</td>
                        </tr>
                        <tr>
                            <td>usd - new zealand dollars</td>
                            <td>1.45</td>
                            <td>-0.49</td>
                        </tr>
                        <tr>
                            <td>usd - hong kong dollars</td>
                            <td>7.79</td>
                            <td>-0.05</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default ForexUsd; 