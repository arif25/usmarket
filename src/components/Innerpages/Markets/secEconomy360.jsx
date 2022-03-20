import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import SpeedometerMarket360 from './SpeedometerMarket360';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ChartEconomyGeneral from "./ChartEconomyGeneral";
import ChartEconomy360General from './ChartEconomy360General';
import BarChartMNIchikagoPMI from "./BarChartMNIchikagoPMI";
import 'react-tabs/style/react-tabs.css';
const iconfaCaretUp = <FontAwesomeIcon icon={faCaretUp} />
const iconfaCaretDown = <FontAwesomeIcon icon={faCaretDown} />
const iconfaTimes = <FontAwesomeIcon icon={faTimes} />
const iconExclamationCircle = <FontAwesomeIcon icon={faExclamationCircle} />
function SecEconomy360(){
  return (
    <>
        <section className="secEquity360"> 
            <article className="secbxEquity360Tabs bxEquityDefPopup" id="DefArtiEconomy360">
                  <div className="bgBxEquityDefPopup">
                      &nbsp;
                  </div>
                  <article className="artiMarket360">
                    <div className="titleMarket360">
                        <h4>Definitions</h4>
                        <div class="marketsBtns" id="CloseSecEconomyBtns">
                            <div className="closeTitleMarket360">{iconfaTimes}</div>
                        </div>
                    </div>
                    <p><span>Economic Rating:</span> Economic Rating Presents Quaterly Economic condition reflected by quaterly market return. a rating above 2.5 indicates that riding on economic groth, spy is expected to exhibit a positive return in the following quarter and vice versa. in the last 50 years, economic rating's predictions were correct about 70% of the time.</p>
                    <p><span>recession rating:</span> recession rating represents the probability of a recession in the economy. a higher rating reflects a higher probability of an economic recession. for instance, a rating above 2.5 predicts an eeconomic an economic downturn for next two quarter and vice versa. in the last 50 years, recession rating's predictions were correct about 96% of the </p>
                    <div className="dosenotShow">
                      <input type="radio" />
                      <p>DON'T SHOW ME AGAIN</p>
                    </div>
                  </article>
            </article>
            <div className='backTitleMarket'>
                  <div className='chartBackBtn1'>Back</div>
                  <div className='backTitleDescBx'>
                      <h3>ECONOMY 360</h3>
                  </div>
            </div>
            <div className="SpeedometerMarket360">

               <div className="economyGeneral">

                <div class="showChart1" id="showEconomyChart1">{iconExclamationCircle}</div>
                <div class="showdefination" id="showEconomydefination">{iconExclamationCircle}</div>
                 
                 <div className="chartEconomyGeneral">
                     <div className="titlebxmarketSentiIndex">
                        <h5>GENERAL</h5>
                     </div>
                     <div className="chartEconomyGeneral" id="chartEconomy360General">
                        <ChartEconomy360General />
                     </div>
                     <div id="MeterEconomy360General">
                        <ChartEconomyGeneral />
                     </div>
                </div>

               <div className="economyEconomicRecession">
                  <div className="chartEconomyEconomic">
                      <div class="showdefination" id="showEconomydefination2">{iconExclamationCircle}</div>
                      <div class="showdefination" id="showEconomydefination2Meter">{iconExclamationCircle}</div>


                    
                    <div className="chartEconomyGeneral" id="chartEconomy360Economic">
                        <ChartEconomy360General />
                    </div>
                    <div id="MeterEconomy360Economic">
                         <ChartEconomyGeneral />
                    </div>


                      
                  </div>
                  <div className="chartEconomyRecession">
                      <div class="showdefination" id="showEconomydefination3">{iconExclamationCircle}</div>
                      <div class="showdefination" id="showEconomydefination3Recession">{iconExclamationCircle}</div>


                      <div className="chartEconomyGeneral" id="chartEconomy360Recession">
                         <ChartEconomy360General />
                      </div>
                      <div id="MeterEconomy360Recession">
                         <ChartEconomyGeneral />
                      </div>


                      
                  </div>
               </div>

               <div className="economyKeyIndicators">
                 <h5>Key Indicators</h5>
                 <div className="economyKeyIndicatorsTable">
                    <table>
                       <thead>
                          <tr>
                             <th>ECONOMIC INDICATORS</th>
                             <th>CURRENT VAL</th>
                             <th>PREVIOUS VAL</th>
                             <th>CHANGE</th>
                          </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>TB: TREASURY YIELD 1Y (A)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>TB: TREASURY YIELD 10Y (A)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>TB: TREASURY YIELD 10Y-1Y (A)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>ECO: US LEADING (1) </td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>ECO: NON-FIRM PAYROLLS (T) (I)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>TB: TREASURY YIELD 1Y (A)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>TB: TREASURY YIELD 10Y (A)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>TB: TREASURY YIELD 10Y-1Y (A)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>ECO: US LEADING (1) </td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                         <tr>
                           <td>ECO: NON-FIRM PAYROLLS (T) (I)</td>
                           <td>0.58% </td>
                           <td>0.06%</td>
                           <td>-0.02%</td>
                         </tr>
                       </tbody>
                    </table>
                 </div>

               </div>

            </div>
            </div>
            <section className="secAreaChartMNIchikagoPMI">
                <div className="titleAreaChart">
                    <h4>MNI CHICAGO PMI</h4>
                </div>
                <div className="bxAreaChartMNIchikagoPMI">
                    <BarChartMNIchikagoPMI />
                </div>
            </section>
        </section>
    </>
    );
}
export default SecEconomy360; 
