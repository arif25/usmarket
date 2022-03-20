import React from "react";
import iconForex from '../../Assets/images/iconForex.png';
import iconTreasury_Yield from '../../Assets/images/iconTreasury_Yield.png';
import ForexUsd from './ForexUsd';
import TreasuryYieldCurve from './TreasuryYieldCurve';
import TreasuryYieldChart from './TreasuryYieldChart';
import Equity360 from './secEquity360';
import SecMarket360 from './secMarket360';
import SecEconomy360 from './secEconomy360';

import $ from 'jquery';
$(document).ready(function(){
    $('#ForexPopup').click(function(){
        $('#secMarketsPage').hide(200);
        $('#secForexUsd').show(200);
        $('#treasuryYieldCurve').hide(200);
    })
    $('#marketsBtnsBack').click(function(){
        $('#secMarketsPage').show(200);
        $('#secForexUsd').hide(200);
        $('#treasuryYieldCurve').hide(200);
    })
    $('#iconTreasury_Yield').click(function(){
        $('#secMarketsPage').hide(200);
        $('#secForexUsd').hide(200);
        $('#treasuryYieldCurve').show(200);
        $('#treasuryYieldCurveChart').show(200);
    })
    $('#treasuryBtnsBack').click(function(){
        $('#secMarketsPage').show(200);
        $('#secForexUsd').hide(200);
        $('#treasuryYieldCurve').hide(200);
        $('#treasuryYieldCurveChart').hide(200);
    });    
    $('#idEquity360').click(function(){
        console.log('secEquity360 --- --- ---');
        $('#secEquity360').show();

        $('#secMarketsPage').hide(200);
        $('#secForexUsd').hide(200);
        $('#treasuryYieldCurve').hide(200);
        $('#treasuryYieldCurveChart').hide(200);
    });
    $('#idEconomy360').click(function(){
        console.log('idEconomy360 ==== === ===');
        // $('#secEquity360').show();
    });
    $('#idMarket360').click(function(){
        $('#secMarket360').show();
        $('#secMarketsPage').hide(200);
        $('#secForexUsd').hide(200);
        $('#treasuryYieldCurve').hide(200);
        $('#treasuryYieldCurveChart').hide(200);
    });
    
    $('#chartBack3601').click(function(){
        $('#secMarket360').hide();
        $('#secMarketsPage').show(200);
        $('#secForexUsd').show(200);
        $('#treasuryYieldCurve').show(200);
        $('#treasuryYieldCurveChart').show(200);
    });

    $('#CloseSecMarketsBtns').click(function(){
        $('#DefArtiMarket360').hide();
    });
    $('#chartBackBtn1').click(function(){
        $('#marketChart1').hide();
        $('#SpeedometerChart1').show();
        $('#speedometerMarketList').show();
        $('#SpeedometerChart1').show();
        $('#showChart1').show();        
        $('#showdefination').show();
    });
    
    $('#showChart1').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });    
    $('#showChart2').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });    
    $('#showChart3').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });    
    $('#showChart4').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });    
    $('#showChart5').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });    
    $('#showChart6').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });    
    $('#showChart7').click(function(){
        $('#marketChart1').show();
        $('#SpeedometerChart1').hide();
        $('#speedometerMarketList').hide();
        $('#SpeedometerChart1').hide();
        $('#showChart1').hide();        
        $('#showdefination').hide();
    });
    $('#showdefination').click(function(){
        $('#DefArtiMarket360').show();
    }); 
    $('#idEconomy360').click(function(){
        $('#secEconomy360').show();
        $('#secMarketsPage').hide();
    });
    $('#CloseSecEconomyBtns').click(function(){
        $('#DefArtiEconomy360').hide();
    });

    $('#showEconomydefination00').click(function(){
        $('#DefArtiEconomy360').show();
    });
    $('#showEconomyChart1').click(function(){
        $('#chartEconomy360General').toggle();
        $('#MeterEconomy360General').toggle();        
    });

    $('#showEconomydefination2').click(function(){
        $('#showEconomydefination2Meter').show();
        $('#MeterEconomy360Economic').hide();
        $('#showEconomydefination2Meter').hide();        
        $('#chartEconomy360Economic').show();
    });
    $('#showEconomydefination2Meter').click(function(){
        $('#showEconomydefination2Meter').hide();
        $('#MeterEconomy360Economic').show();
        $('#showEconomydefination2Meter').show();        
        $('#chartEconomy360Economic').hide();
    });   
    $('#showEconomydefination3Recession').click(function(){
        $('#showEconomydefination3').hide();
        $('#MeterEconomy360Recession').hide();
        $('#chartEconomy360Recession').show();
        $('#showEconomydefination3Recession').show();
    });
});

function MarketsPageContent(){
    return(
        <>
        <section className="secEconomy360" id="secEconomy360">
            <SecEconomy360 />
        </section>
        <section className="secMarketsPage" id="secMarketsPage">
            <div className="marketTopTitles">
                <h3>Markets</h3>
                <div className="marketsBtns">
                    <a href="#">Risk</a>
                </div>
            </div>
            <div className="pfWsListContent secMarkets">
                <div className="itemMarketTitle">
                    <div className="innerpagetitle">
                    <h4>Futures</h4>
                </div>
                <ul>
                <li className="pfWsListContentLiRow">
                    <div className="pfWsListContentHeader">
                        <ul>
                            <li>
                                <div className="itemMarket">
                                    <h5>S & P</h5>
                                    <p className="GreenText">4.46K</p>
                                    <p className="GreenText">-0.70%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>NASDAQ</h5>
                                    <p className="colorred">15.45K</p>
                                    <p className="colorred">-0.71%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>DOW</h5>
                                    <p className="GreenText">34.65K</p>
                                    <p className="GreenText">-0.65%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>10Y TREA.</h5>
                                    <p className="GreenText">133.14</p>
                                    <p className="GreenText">-0.27%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>FED FUND</h5>
                                    <p className="GreenText">99.92</p>
                                    <p className="GreenText">-0.0025%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>S & P</h5>
                                    <p className="GreenText">4.46K</p>
                                    <p className="GreenText">-0.70%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>NASDAQ</h5>
                                    <p className="colorred">15.45K</p>
                                    <p className="colorred">-0.71%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>DOW</h5>
                                    <p className="colorred">34.65K</p>
                                    <p className="colorred">-0.65%</p>
                                </div>
                            </li>
                            <li>
                                <div className="itemMarket">
                                    <h5>DOW</h5>
                                    <p className="colorred">34.65K</p>
                                    <p className="colorred">-0.65%</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
                </div>
                <div className="itemMarket">
                    <div className="innerpagetitle">
                        <h4>Sector Futures</h4>
                    </div>
                    <ul>
                        <li className="pfWsListContentLiRow">
                            <div className="pfWsListContentHeader">
                                <ul>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>10Y TREA.</h5>
                                            <p className="GreenText">133.14</p>
                                            <p className="GreenText">-0.27%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>FED FUND</h5>
                                            <p className="colorred">99.92</p>
                                            <p className="colorred">-0.0025%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="colorred">34.65K</p>
                                            <p className="colorred">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="colorred">34.65K</p>
                                            <p className="colorred">-0.65%</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="itemMarket">
                    <div className="innerpagetitle">
                        <h4>Treasury Yield</h4>
                        <div className="popupMarket" id="iconTreasury_Yield">
                           <img src={ iconTreasury_Yield } alt="" />
                        </div>
                    </div>
                    <ul>
                        <li className="pfWsListContentLiRow">
                            <div className="pfWsListContentHeader">
                                <ul>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>10Y TREA.</h5>
                                            <p className="GreenText">133.14</p>
                                            <p className="GreenText">-0.27%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>FED FUND</h5>
                                            <p className="GreenText">99.92</p>
                                            <p className="GreenText">-0.0025%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="colorred">4.46K</p>
                                            <p className="colorred">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="colorred">34.65K</p>
                                            <p className="colorred">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="colorred">34.65K</p>
                                            <p className="colorred">-0.65%</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="itemMarket">
                    <div className="innerpagetitle">
                        <h4>Forex</h4>
                        <div className="popupMarket" id='ForexPopup'>
                        <img src={ iconForex } alt="" />
                        </div>
                    </div>
                    <ul>
                        <li className="pfWsListContentLiRow">
                            <div className="pfWsListContentHeader">
                                <ul>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>10Y TREA.</h5>
                                            <p className="colorred">133.14</p>
                                            <p className="colorred">-0.27%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>FED FUND</h5>
                                            <p className="GreenText">99.92</p>
                                            <p className="GreenText">-0.0025%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="itemMarket">
                    <div className="innerpagetitle">
                        <h4>Commodities</h4>
                    </div>
                    <ul>
                        <li className="pfWsListContentLiRow">
                            <div className="pfWsListContentHeader">
                                <ul>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>OID</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>GOLD</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>SILVER</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>COPPER</h5>
                                            <p className="colorred">133.14</p>
                                            <p className="colorred">-0.27%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>PLAT.</h5>
                                            <p className="GreenText">99.92</p>
                                            <p className="GreenText">-0.0025%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>S & P</h5>
                                            <p className="GreenText">4.46K</p>
                                            <p className="GreenText">-0.70%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>NASDAQ</h5>
                                            <p className="GreenText">15.45K</p>
                                            <p className="GreenText">-0.71%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemMarket">
                                            <h5>DOW</h5>
                                            <p className="GreenText">34.65K</p>
                                            <p className="GreenText">-0.65%</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="secFeaturesBtns">
                <ul>
                    <li>
                        <a href="">Futures Overview</a>
                    </li>
                    <li>
                        <a href="">Futures key Markets</a>
                    </li>
                    <li>
                        <a href="">Advances/Declines</a>
                    </li>
                    <li>
                        <a href="">Market Movers</a>
                    </li>
                    <li>
                        <a href="">ETF Movers</a>
                    </li>
                </ul>
            </section>
            <section className="secEquityEconomyMarketBtns">
                <ul>
                    <li id="idEquity360">
                        <a>Equity 360</a>
                    </li>
                    <li id="idEconomy360">
                        <a>Economy 360</a>
                    </li>
                    <li id="idMarket360">
                        <a>Market 360</a>
                    </li>
                </ul>
            </section>
        </section>

        <section className="secForexUsd" id="secForexUsd">
            <ForexUsd />
        </section>
        <section className="treasuryYieldCurve" id="treasuryYieldCurveChart">
            <TreasuryYieldChart />
        </section>
        <section className="treasuryYieldCurve" id="treasuryYieldCurve">
            <TreasuryYieldCurve />
        </section>
        <section className="secEquity360" id="secEquity360">
            <Equity360 />
        </section>
        <section className="secMarket360" id="secMarket360">
            <SecMarket360 />
        </section>

        </>
    );
}

export default MarketsPageContent;