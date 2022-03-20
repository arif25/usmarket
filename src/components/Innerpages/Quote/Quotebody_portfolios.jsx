import React, {useState} from 'react';
import MarketSwiper from '../../Dashboardpage/Carousel/MarketSwiper';
import {Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import QuoteDialsAnalystRating from '../../Dashboardpage/Chart/Speedometer/QuoteDialsAnalystRating';
import ChartQuotePage from '../../Dashboardpage/Chart/ChartQuotePage';
import QuoteVolumeBarChart from './QuoteVolumeBarChart';
import QuotePageNews from '../../Dashboardpage/TopstoriesPortfolio/QuotePageNews';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Accordion } from 'react-bootstrap-accordion';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const iconfaSearch = <FontAwesomeIcon icon={ faSearch } />
const iconfaTimes = <FontAwesomeIcon icon={ faTimes } />
const iconfaAngleRight = <FontAwesomeIcon icon={ faAngleRight } />

var inputSearchTerm;
var dup_array_2_key;
var symbol_key;
var symbol_2_key;
var name_key;
var myJson_key;
var test_json_key = [];
var dup_array_key = [];
var dup_array_symbolname = [];
var dup_array_split = [];
var change_searchTerm_key;

$(document).ready(function(){
    // console.log("Portfolio Page:-----")
    $(".searchboxSelectDropdown").click(function(){
        $("#container_loading").hide();
        $("#quoteSearch_portfolios").hide();
    })
    $(".header").click(function(){
        $("#container_loading").hide();
        $("#quoteSearch_portfolios").hide();
    })
    $(".secmain").click(function(){
        $("#container_loading").hide();
        $("#quoteSearch_portfolios").hide();
    })
    $("#listInput").click(function(){
        $("#container_loading").show();
        $("#quoteSearch_portfolios").show();
    })
 $("#btnSupportResistance").click(function(){
     $("#showSupportResistance").show();

 });
     $("#showSupportResistance").click(function(){
         $("#showSupportResistance").hide();
     })
     setInterval(function(){
         if (! $('#quoteSearch_portfolios').children().length > 0 ) {
        }
     }, 1000)
     $("#showSupportResistance").click(function(){
         $("#showSupportResistance").hide();
     })
     setInterval(function(){
         if (! $('#quoteSearch_portfolios').children().length > 0 ) {
        }
     }, 500)
  
})

function Quotebody_new() { 
  var change_searchTerm = 0;
  var test_json = [];
  var symbol_2;
  var test_array = []; 
  var name;
  var myJson = {    
  }
  var searchTerm_portfolio;
  var apicall_flag = 0;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm_2, setSearchTerm_2] = useState(''); 
  window.x_getItem = localStorage.getItem("searchlist_portfolio");

        React.useEffect(() => {
            if(!window.x_getItem){
                if(apicall_flag == 0){
                var myHeaders = new Headers();
                myHeaders.append("DevAuth", "2399efa3-8141-41f4-8cdd-5bfc2efe8ded");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                };   
                fetch("https://webapp20211006.zsenia.com/data/zportfolio/samples", requestOptions)
                .then(response => response.json())  
                .then(result => { 
                    setSearchTerm_2(result) 
                }) 
                .catch(error => console.log('error', error)); 
                apicall_flag = 1; 
            }  
        }  
        }, []);

if(!window.x_getItem){
    var searchTerm_1 = searchTerm_2;
    global.searchData_portfolio = searchTerm_2;
    localStorage.setItem("cookies_portfolios", searchTerm_1); 
    window.x_getItem = localStorage.getItem("cookies_portfolios");
}
else {
    window.x_getItem = localStorage.getItem("cookies_portfolios");
}
   
  return (
    <>
  <div className="quoteInner">
        <section className="searchboxSelectDropdown">            
            <div className="quotetickerName">
                <h3>APPLE INC. (AAPL)</h3>
            </div>
            <div className="quoteSearchDropbox">
                <div className="selectDropQuote">
                    <Form.Select aria-label="Default select example" id="selectDropQuote" className="selectDropQuote">
                        <option value="ticker">Ticker</option>
                        <option value="options">options</option>
                        <option value="portfolios">portfolios</option>
                        <option value="zindex">z-index</option>
                    </Form.Select>
                </div>
                <div className="searchboxQuote">
                    <InputGroup className="mb-3">
                        <input type="text" placeholder="Search Portfolios" id="listInputPortfolio" autocomplete="off"/>
                        <Button variant="outline-secondary" id="button-addon2">{ iconfaSearch }</Button>
                    </InputGroup>                      
                    <div class="loading-box" id="container_loading">
                        <div class="loader"></div>
                        <h6>Loading...</h6>
                    </div>
                    <div className="quoteSearch" id="quoteSearch_portfolios">
                        <div id="listPort_name"></div>
                        <div id="listPort_symbols"></div>
                        {/* search list will show here */}
                    </div>
                </div>
            </div>
        </section>
        <section className="selectedTicker" id="selectedTicker">
            <section className="secQuoteBody">
            <div className="contentCloseOpen">
                <div className="bxContentCloseOpen valueCloseOpenLeft">
                    <div className="valueCloseOpen ">
                        <h2>150.44</h2>
                        <h5 className="valueRed">-0.08 (-0.56%)</h5>
                    </div>
                    <p>At close: 4.00pm Est</p>
                </div>                
                <div className="bxContentCloseOpen">
                    <div className="valueCloseOpen">
                        <h2>151.04</h2>
                        <h5 className="valueGreen">0.06 (0.56%)</h5>
                    </div>
                    <p>At close: 4.00pm Est</p>
                </div>
            </div>
            <div className="QuoteContentTable">
                <table>
                    <tr>
                        <td>High: </td>
                        <td>150.44</td>
                    </tr>
                    <tr>
                        <td>Low: </td>
                        <td>151.04</td>
                    </tr>
                    <tr>
                        <td>open: </td>
                        <td>150.44</td>
                    </tr>
                    <tr>
                        <td>Previous Close: </td>
                        <td>150.44</td>
                    </tr>
                    <tr>
                        <td>Volume: </td>
                        <td>150.44</td>
                    </tr>
                </table>
            </div>
            <div className="quotebuttons">
                <div className="rsiDmiButtonOuter">
                    <div className="rsiDmiButton ">
                        <h3>RSI</h3>
                        <h5 className="rsiDmiButton_yellow">OVER SOLD</h5>
                    </div>
                    <div className="rsiDmiButton margin_Right_Zero">
                        <h3>DMI</h3>
                        <h5 className="rsiDmiButton_yellow">WEAK TREND</h5>
                    </div>
                    <div className="rsiDmiButton">
                        <h3>MACD</h3>
                        <h5 className="rsiDmiButton_red">POTENTIALS S....</h5>
                    </div>
                    <div className="rsiDmiButton margin_Right_Zero">
                        <h3>OBV</h3>
                        <h5 className="rsiDmiButton_green">POTENTIALS BUY</h5>
                    </div>
                </div>
                <div className="btnSupport" id="btnSupportResistance">
                    <h4>Support Resistance</h4>
                </div>
                    <div className="showSupportResistance" id="showSupportResistance">
                        <div className="bxSupportResistance">
                            <div className="popupSupportResistance">
                                <div className="popupSupportResistance_title" id="popupSupportResistance_title">
                                    <p>Support/Resistance</p>
                                    <div className="icon_popupSupportResistance_close" id="icon_popupSupportResistance_close">
                                        { iconfaTimes }
                                    </div>
                                </div>

                                <div className="popupSupportResistance_content" id="popupSupportResistance_content">
                                    <table>
                                        <thead>
                                            <th>Title</th>
                                            <th>Latest Value</th>
                                            <th>Last Price</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                            <tr>
                                                <td>50 Day SMA</td>
                                                <td>147.97</td>
                                                <td>dOWN</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="addBtn_Resistance_content">
                                    <ul>
                                        <li>Add Support</li>
                                        <li id="removeResistance">Add Resistance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="DialsAnalytics">
                <h3>Analyst Rating</h3>
                <div className="bxDialsAnalytics">
                    <QuoteDialsAnalystRating />
                </div>
            </div>
            </section>
            <section className="secQuoteChart">
            <div className="bxQuoteChart">
              <ChartQuotePage />
            </div>
            <div className="secVolumeChart">
                <QuoteVolumeBarChart />
            </div>
            </section>
            <section className="secQuoteTabs">
            <div >
                <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                    <Tab label="Key Ratio">
                        <div className="bxKeyRatio">
                            <ul className="ULbxKeyRatio">
                                <li>
                                    <div className="keyRatioLaft">
                                        <table>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                                <li>
                                    <div className="keyRatioLaft">
                                        <table>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                                <li>
                                    <div className="keyRatioLaft">
                                        <table>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                            <tr>
                                                <td>Current P/E </td>
                                                <td>30.24</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            
                           
                        </div>
                    </Tab>
                    <Tab label="Analytics">
                        <div className="bxKeyRatio bxAnalytics">
                            <div className="keyRatioLaft">
                                <table>
                                    <tr>
                                        <td>Name</td>
                                        <td>AAPL</td>
                                    </tr>
                                    <tr>
                                        <td>Select</td>
                                        <td>Spy</td>
                                    </tr>
                                    <tr>
                                        <td>Period</td>
                                        <td>3Y</td>
                                    </tr>
                                    <tr>
                                        <td>ANNUALIZED RETURN</td>
                                        <td>56.7%</td>
                                    </tr>
                                    <tr>
                                        <td>RETURN</td>
                                        <td>284.4%</td>
                                    </tr>
                                    <tr>
                                        <td>STANDARD DEVIATION</td>
                                        <td>34.478%</td>
                                    </tr>
                                    <tr>
                                        <td>RETURN/RISK</td>
                                        <td>1.643</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div className="keyRatioRight">
                                <table>
                                    <tr>
                                        <td>DIVIDEND YIELD</td>
                                        <td>0.547</td>
                                    </tr>
                                    <tr>
                                        <td>VALUE AT RISK (HIGH)</td>
                                        <td>-3.584%</td>
                                    </tr>
                                    <tr>
                                        <td>ALPHA</td>
                                        <td>28.03%</td>
                                    </tr>
                                    <tr>
                                        <td>BETA</td>
                                        <td>1.231</td>
                                    </tr>
                                    <tr>
                                        <td>SHARPE RATIO</td>
                                        <td>1.59</td>
                                    </tr>
                                    <tr>
                                        <td>BATTING AVERAGE</td>
                                        <td>0.55</td>
                                    </tr>
                                    <tr>
                                        <td>CAPTURE RATIO UP</td>
                                        <td>2.294</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Ratings ratingSnapshot">
                        <div className="bxKeyRatio ratingsBxKeyRatio">
                            <ul>
                                <li>
                                    <div className="DialsAnalytics">
                                        <h3>Analyst Rating</h3>
                                        <div className="bxDialsAnalytics">
                                            <QuoteDialsAnalystRating />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="DialsAnalytics">
                                        <h3>Analyst Rating</h3>
                                        <div className="bxDialsAnalytics">
                                            <QuoteDialsAnalystRating />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="DialsAnalytics">
                                        <h3>Analyst Rating</h3>
                                        <div className="bxDialsAnalytics">
                                            <QuoteDialsAnalystRating />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="DialsAnalytics">
                                        <h3>Analyst Rating</h3>
                                        <div className="bxDialsAnalytics">
                                            <QuoteDialsAnalystRating />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab label="Earnings">
                        <div className="bxKeyRatio">
                            <div className="bxAccordion">
                            <Accordion show title="Earning Estimates" >
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Earning Events" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Earning surprises" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Enhanced Earnings" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Earning Preannouncements" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="News">
                        <div className="bxKeyRatio">
                            <QuotePageNews />
                        </div>
                    </Tab>
                    <Tab label="Technicals">                        
                        <div className="bxKeyRatio">
                        <div className="bxAccordion">
                            <Accordion show title="Earning Estimates" >
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Earning Events" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Earning surprises" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            <Accordion title="Enhanced Earnings" >
                            <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="accordionEarningsContent">
                                    <h5>Wedbush Securit</h5>
                                    <div className="earningTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Reviced</td>
                                                    <td>Previous</td>
                                                    <td>% Change</td>
                                                    <td>Year</td>
                                                    <td>Est.Date</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5.66</td>
                                                    <td>5.68</td>
                                                    <td>-0.004</td>
                                                    <td>2002</td>
                                                    <td>2021-10-25</td>
                                                </tr>
                                                <tr>
                                                    <td>3.81</td>
                                                    <td>3.85</td>
                                                    <td>-0.01</td>
                                                    <td>2021</td>
                                                    <td>2020-10-30</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                                <tr>
                                                    <td>11.72</td>
                                                    <td>11.62</td>
                                                    <td>0.009</td>
                                                    <td>2019</td>
                                                    <td>2019-07-31</td>
                                                </tr>
                                                <tr>
                                                    <td>13.52</td>
                                                    <td>12.95</td>
                                                    <td>0.044</td>
                                                    <td>2020</td>
                                                    <td>2020-10-29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Accordion>
                            </div>
                        </div>
                    </Tab>
                </Tabs>    
            </div>
            </section>
        </section>

        <section className="secTabsmain">
            <ul>
                <li>Analytics Quick Review</li>
                <li>Similar Securities</li>
                <li>Hedging Correlations</li>
                <li>Market Event Analytics</li>
                <li>Export as PDF</li>
                <div>{iconfaAngleRight}</div>
            </ul>
        </section>
    </div>
    </>
  ); 
}
$(document).ready(function(){
    $('#listInputPortfolio').keyup(function() {
        console.log("#listInputPortfolio Click")
        $("#container_loading").show();
        inputSearchTerm = $("#listInputPortfolio").val();
        setTimeout(function(){
            if(inputSearchTerm.length <= 0){ 
                document.getElementById("quoteSearch_zindex").innerHTML = "";
                $("#quoteSearch_zindex").hide(200);
            }
        },4000)
        window.x_getItem = localStorage.getItem("cookies_portfolios");
        setTimeout(function(){
            if(window.x_getItem.length > 0){
                $("#quoteSearch_portfolios").show();
                global.searchData_portfolio.map((searchTerm, indexPort)=>{
                    document.getElementById("listPort_name").innerHTML += "<div class='listSelect' id="+indexPort+"><h3>" + searchTerm.name+"</h3></div>";
                    searchTerm.tickers.map((tickerSymbol, index)=>{
                        document.getElementById(indexPort).innerHTML += "<span>" + tickerSymbol.symbol+"</span>"; 
                    });
                })
            }
        }, 2000);
      });
})

export default Quotebody_new;
