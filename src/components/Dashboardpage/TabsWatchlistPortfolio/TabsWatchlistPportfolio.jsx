import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import APItabsPortfolio from '../APIuseEffect/APIportfolio/APItabsPortfolio';
import $ from "jquery";
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
const iconfaColumns = <FontAwesomeIcon icon={faAngleDoubleDown} />

function TabsWatchliPortfolio() {  
    var watchCycleflag = 0;
    var callwaitchList;

    const [showWelcome_watch, setShowWelcome_watch]=useState(false);
    const [toggleState_watch, setToggleState_watch] = useState(1);
    const toggleTab_watch = (index_watch) =>{
        setToggleState_watch(index_watch);
    }
    var listWatchlist = [];
    const data =[[]];
    const [newsResult, setNewsResult] = useState([]);
    const [watchlistResult2, setWatchlistResult2] = useState([]);
    React.useEffect(() => {
        fetch(global.watchlistAPI, global.requestOptions)
        .then(response => response.json())  
        .then(result => {  
            setWatchlistResult2(result)
        })
        .catch(error => console.log('error', error));
    }, []); // Pass empty array to only run once on mount.  

    global.newsResult_summary = newsResult;
    global.newsResult_watchlistAPI = watchlistResult2;
    global.newsResult_summary.map(a=>{ 
        data.push({ portfolio_title: a[1] });   
    }) 
    const createWatchlist = (listno) =>{
       document.getElementById('pfWsListContentBody').innerHTML = '';
       watchlistResult2.map((a, index)=>{  
        if(index === listno){
            if(a.tickers){  
                a.tickers.map(b=>{
                    if(b.symbol){
                        document.getElementById('selectedWatchlist').innerHTML = `<h5>` + a.name.replace('*', '') + `</h5>`;
                        document.getElementById('pfWsListContentBody').innerHTML += 
                        `<li class="pfWsListContentLiRow">
                            <ul class="pfWsListContentBody">
                                <li class="liveStreamTicker">` + b.symbol + `</li>
                                <li class="liveStreamMark` + b.symbol + `">--</li>
                                <li class="liveStreamChange` + b.symbol + `">--</li>
                                <li class="liveStreamBid` + b.symbol + `">--</li>
                                <li class="liveStreamAsk` + b.symbol + `">--</li>
                                <li class="liveStreamVolume` + b.symbol + ` colorgray">--</li>
                            </ul>
                        </li>`;
                    }                 
                })  
            }     
        }  
      })
    }

    function onloadWatchlist(){ 
        $("#loaderWatchlist").show();
        setTimeout(function(){ 
            $("#loaderWatchlist").hide(100);
            document.getElementById('tabwatchlist').innerHTML = `<span>Watchlist</span>`;
            watchlistResult2.map((a, index)=>{  
                    if(a.tickers){  
                    watchCycleflag = 1;
                    a.tickers.map(b=>{
                        if(b.symbol){
                            document.getElementById('selectedWatchlist').innerHTML = `<h5>` + a.name.replace('*', '') + `</h5>`;
                            document.getElementById('pfWsListContentBody').innerHTML += 
                            `<li class="pfWsListContentLiRow">
                                <ul class="pfWsListContentBody">
                                    <li class="liveStreamTicker">` + b.symbol + `</li>
                                    <li class="liveStreamMark` + b.symbol + `">--</li>
                                    <li class="liveStreamChange` + b.symbol + `">--</li>
                                    <li class="liveStreamBid` + b.symbol + `">--</li>
                                    <li class="liveStreamAsk` + b.symbol + `">--</li>
                                    <li class="liveStreamVolume` + b.symbol + ` colorgray">--</li>
                                </ul>
                            </li>`;
                        }
                    })
                }
            })
        }, 2000)  
    }

  const [showWelcome, setShowWelcome]=useState(false);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index);    
  } 

  return (
    <div className="">
       <section className="portfoliowatchlist">
            <div className="pfWsListTitle">
                <div className="pfWsListTitleRight">
                  <div className={toggleState === 2 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>

                    <div className="portfolioDropdown_watch" id="portfolioDropdown_watch">
                        <div className="portfolioList_watch">
                            <div>
                                <div className="portDropIcon_Watch">{iconfaColumns}</div>
                            </div>
                            {
                                <div >
                                    <div className="my_dropdown_watch">                                            
                                        <div className="portDropList_watch" id="portDropList_watch">
                                            <ul>

                                            { watchlistResult2.map((a, index)=>{
                                                if(a.tickers){ 
                                                    return(
                                                       <>    
                                                        <li className="tabs">
                                                            <div onClick={()=>createWatchlist(index)}>{a.name.replace('*', '')}</div>
                                                        </li>
                                                       </>
                                                    )
                                                }  
                                            }) }
                                            </ul>
                                        </div>
                                    </div>  
                                </div>
                        }                             
                        </div>                  
                    </div>
                    
                    <p id="tabwatchlist"><span onClick= {()=>onloadWatchlist()}>Watchlist</span></p>
                    </div>
                </div>
                <div className="pfWsListTitleLeft">    
                    <p className={toggleState === 1 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>Portfolio</p>
                </div>
            </div>
            <div className="pfWsListContent">
                <div className="contentbx">
                    <ul>
                        <li className={toggleState===1 ? "content active-content": "content"}>
                            <div className="APIportfolioDataBx">                               
                               <APItabsPortfolio />
                            </div>
                        </li>
                        <li className={toggleState===2 ? "content active-content": "content"}>
                        <div className="pfWsListContent">
                            <div class="selectedPortName" id="selectedWatchlist"><h5>Watchlist Name</h5></div>
                            
                            <div class="loaderWatchlist" id="loaderWatchlist">
                                <div class="spinner-box">
                                    <div class="circle-border">
                                        <div class="circle-core"></div>
                                    </div>  
                                </div>
                            </div>
                            <ul>
                                <li className="">
                                    <div className="pfWsListContentHeader" id="pfWsListContentHeader">
                                        <ul>
                                            <li>Ticker</li>
                                            <li>Last</li>
                                            <li>% ChG</li>
                                            <li>bid</li>
                                            <li>ask</li>
                                            <li>volume</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>  
                        </div> 
                        <div className="pfWsListContentTable pfWsListWatchlist" id="portfoliowatchlist">
                            <ul> 
                                <li className="content active-content">
                                    <div className="APIportfolioData">
                                        <ul id="pfWsListContentBody"> 
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                </div>
           </div>
        </section>
    </div>
  );
}

export default TabsWatchliPortfolio;
