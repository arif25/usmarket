import notification from '../Assets/images/notification.png';
import Marketpopupdescription from './Marketpopupdescription';
import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PopupSpeedometerEconomy from '../Dashboardpage/Chart/Speedometer/PopupSpeedometerEconomy';
import PopupSpeedometerValuation from '../Dashboardpage/Chart/Speedometer/PopupSpeedometerValuation';
import PopupSpeedometerSentiment from '../Dashboardpage/Chart/Speedometer/PopupSpeedometerSentiment'; 
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper.scss';
import LiveStream from '../LiveStream/LiveStream';
import APIeconomysChart from '../Dashboardpage/APIuseEffect/APIeconomy/APIeconomysChart';
import APIvaluationsChart from '../Dashboardpage/APIuseEffect/APIvaluation/APIvaluationsChart';
import APIsentimentalChart from '../Dashboardpage/APIuseEffect/APIsentimental/APIsentimentalChart';

import $ from "jquery";
const iconfaExchangeAlt = <FontAwesomeIcon icon={faExchangeAlt} />
const iconfaCaretUp = <FontAwesomeIcon icon={faCaretUp} />
const iconfaCaretDown = <FontAwesomeIcon icon={faCaretDown} />
const iconfaColumns = <FontAwesomeIcon icon={faTimes} />
function Header(){ 
    let speedometerEconomy = [];
    let areaChartEconomy = [];    
    let areaChartValuation = [];
    let speedometerValuation = [];    
    let areaChartSentiment = [];
    let speedometerSentiment = []; 
    const [nowEconomy, setChartEconomy] = useState(1);
    const changeChartEconomy = () =>{
        var val = nowEconomy; 
        if(val===1){
            setChartEconomy(2);
        }
        else{
            setChartEconomy(1) 
        }
    }
    const [nowValuation, setChartValuation] = useState(1);
    const changeChartValuation = () =>{
        var val = nowValuation; 
        if(val===1){
            setChartValuation(2);
        }
        else{
            setChartValuation(1) 
        }
    }
    const [nowSentiment, setChartSentiment] = useState(1);
    const changeChartSentiment = () =>{
        var val = nowSentiment; 
        if(val===1){
            setChartSentiment(2);
        }
        else{
            setChartSentiment(1) 
        }
    } 
    const [newsResult, setNewsResult] = useState({});
    const [marketUpdateResult, setmarketUpdateResult] = useState([]);

    React.useEffect(() => {  
        fetch(global.APIpopupTextAll, global.requestOptions)
        .then(response => response.text())  
        .then(result => {   
            setmarketUpdateResult(result)
        })
        .catch(error => console.log('error', error));  
    }, []);
    
    $(document).ready(function(){
        if(document.getElementById('popupMarket')){
            var all_links = document.getElementById('popupMarket').getElementsByTagName("a");
            $('#popupMarket a').removeAttr('href');
        }        
        $('#latestMarketUpdate').click(function(){ 
            $("#bxWelcomePopup").fadeIn();
        });
        $('#popupClose').click(function(){ $("#bxWelcomePopup").fadeOut();});
    })

    const [show, setShow]=useState(false);    
    const [showWelcome, setShowWelcome]=useState(false);

    if(nowEconomy === 1){
        areaChartEconomy.push('displayNone')
        speedometerEconomy.push('displayBlock')
    }
    if(nowEconomy === 2){
        areaChartEconomy.push('displayBlock')
        speedometerEconomy.push('displayNone')
    }
    if(nowValuation === 1){
        areaChartValuation.push('displayNone')
        speedometerValuation.push('displayBlock')
    }
    if(nowValuation === 2){
        areaChartValuation.push('displayBlock')
        speedometerValuation.push('displayNone')
    }
    if(nowSentiment === 1){
        areaChartSentiment.push('displayNone')
        speedometerSentiment.push('displayBlock')
    }
    if(nowSentiment === 2){
        areaChartSentiment.push('displayBlock')
        speedometerSentiment.push('displayNone')
    } 
    return (
    <>
    {}
    <header>
        <div className="userdetails">
            <ul>
                <li>
                    <div className="Login marketOPenclose">
                        <LiveStream />
                    </div>
                </li>
                <li>
                    <div className="iconNotification" id="latestMarketUpdate">
                        <img src={notification} alt="" />
                        <div className="notificationActive"></div> 
                    </div>
                </li>
            </ul>
        </div>
    </header>
    <>
        <div>
        </div>
            {
                    <div className="bxWelcomePopup" id="bxWelcomePopup">
                        <div className="welcomePopup">

                            <div className="titleMarketPopup">
                                <div className="popupClose" id="popupClose">
                                    {iconfaColumns}
                                </div>
                                <div className="trial_1_month">
                                    <h3>Latest Market Update</h3> 
                                </div>
                            </div>

                            <div className="economyValuationSentiment">
                                <div className="bxSpeedometer">
                                    <ul>
                                        <li>
                                            <div className="bxItemDialsCharts popupBxItemDialsCharts">
                                                <div className="graphTitle">Economy</div>
                                                <div className="graphContent">
                                                    <div className="gameChanger">
                                                        <p className="changeChartEconomy">{iconfaExchangeAlt}</p>  
                                                    </div>
                                                    <div className={areaChartEconomy} id="areaChartEconomy">
                                                        <APIeconomysChart /> 
                                                    </div>
                                                    <div className={speedometerEconomy} id="speedometerEconomy">                    
                                                        <PopupSpeedometerEconomy />
                                                    </div>                        
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="bxItemDialsCharts popupBxItemDialsCharts">
                                                <div className="graphTitle">Valuation</div>
                                                <div className="graphContent"> 
                                                    <div className="gameChanger">
                                                        <p className="changeChartValuation">{iconfaExchangeAlt}</p>  
                                                    </div>
                                                    <div className={areaChartValuation} id="areaChartValuation"> 
                                                        <APIvaluationsChart />
                                                    </div>
                                                    <div className={speedometerValuation} id="speedometerValuation">                    
                                                        <PopupSpeedometerValuation />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>  
                                            <div className="bxItemDialsCharts popupBxItemDialsCharts">
                                                <div className="graphTitle">Sentiment</div>
                                                <div className="graphContent">
                                                    <div className="gameChanger">
                                                        <p className="">{iconfaExchangeAlt}</p>  
                                                    </div>
                                                    <div className={areaChartSentiment} id="areaChartSentiment"> 
                                                        <APIsentimentalChart />            
                                                    </div>
                                                    <div className={speedometerSentiment} id="speedometerSentiment">                    
                                                        <PopupSpeedometerSentiment />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="FuturesTable">
                                    <h5><b>Futures</b></h5>
                                    <div className="listFeatures popupListFeatures">
                                        <ul>  
                                        { global.newResult_marketsAPI && global.newResult_marketsAPI.futures && global.newResult_marketsAPI.futures.map(article =>      
                                            <li >
                                            <div className="marketMenuLeft">
                                                <div className="marketMenuContent">
                                                    <p>{article.name}</p>   
                                                </div> 
                                            </div>                                            
                                            <div className="popupmarketLastContent">
                                                <p>
                                                    {
                                                    parseFloat(article.last/1000).toFixed(2) === 0? <span className="iconfaCaretDown colorgray">
                                                    {parseFloat(article.last/1000).toFixed(2)}k</span> : parseFloat(article.last/1000).toFixed(2) > 0? <span className="colorGreen iconfaCaretUp">{parseFloat(article.last/1000).toFixed(2)}k</span>: <span className="iconfaCaretDown colorred">{parseFloat(article.last/1000).toFixed(2)}k</span>
                                                    } 
                                                </p>
                                            </div> 
                                            <div className="marketMenuRight">
                                                <h5>{article.percent === 0? <span className="iconfaCaretDown colorgray">{parseFloat(article.percent).toFixed(4)}<span>%</span></span> : article.percent >= 0? <span className="colorGreen iconfaCaretUp">{parseFloat(article.percent).toFixed(4)}<span>%</span></span>: <span className="iconfaCaretDown colorred">{parseFloat(article.percent).toFixed(4)}<span>%</span></span>
                                                } 
                                                {article.percent === 0? <span className="iconfaCaretDown colorgray">
                                                        {iconfaCaretUp}
                                                    </span> : article.percent >= 0? <span className="colorGreen iconfaCaretUp">
                                                        {iconfaCaretUp}
                                                    </span>: <span className="iconfaCaretDown colorred">
                                                        {iconfaCaretDown}
                                                    </span>}                                                
                                                </h5>
                                            </div>
                                        </li>
                                        )}

                                        </ul>
                                    </div>  
                                </div>
                                <div className="futures">
                                    <div id="popupMarket">
                                       {  
                                        <div dangerouslySetInnerHTML={{ __html: marketUpdateResult }} ></div>
                                        }
                                    </div>

                                </div>
                            </div>                            
                        </div>
                    </div>
            }
        </>
    </>
    );
}
export default Header;
