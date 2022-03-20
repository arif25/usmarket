import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
// import TabsWatchliPortfolio from '../../TabsWatchlistPortfolio/TabsWatchlistPportfolio';
const iconfaColumns = <FontAwesomeIcon icon={faAngleDoubleDown} />

function APItabsPortfolio() {   
    var arrPortTable = [];
    const dataPortfolio1 =[];
    // const dataPortfolio2 =[];
    // const dataPortfolio3 =[];
    // const dataPortfolio4 =[];
    const showPortfolio = [];
    const [searchTerm, setSearchTerm] = useState([]);
    const [newsResult, setNewsResult] = useState([]);
    const [newsResult1, setNewsResult1] = useState([]);
    const [showWelcome, setShowWelcome]=useState(false);
    const [toggleState, setToggleState] = useState(1);
    // const toggleTab = (index) =>{
    //     setToggleState(index);
    // }
    React.useEffect(() => {
          fetch(global.portfolioAPI_summary, global.requestOptions)
          .then(response => response.json())  
          .then(result => {
            result.map(a=>{ 
                dataPortfolio1.push({ portfolio_title: a[1], portfolio_ID : a[0], portfolio_links : global.portfolioAPI_summary+a[0] });  
             })      
    
             dataPortfolio1.map((portfolio_list,index)=>{ 
                    if(index === 0){
                        fetch(portfolio_list.portfolio_links, global.requestOptions)
                        .then(response => response.json())  
                        .then(result => {                          
                            result.map((portfolio_item, index1)=>{                            
                                dataPortfolio1.push({ portfolio_title: portfolio_item[0], portfolioLast : portfolio_item[1], portfoliopercentCNG : portfolio_item[2], portfoliopercent3M : portfolio_item[3], portfolioPercentYTD : portfolio_item[4], portfolioPercent1YR : portfolio_item[5] }); 
                            }) 
                            arrPortTable.push({ key1 : dataPortfolio1 });
                            setNewsResult1(result) 
                        })
                    }
            })
            setNewsResult(result)
          })

          fetch("https://webapp20211006.zsenia.com/data/ticker/list/full/compressed",  global.requestOptions)
          .then(response => response.text())  
          .then(result => { 
            setSearchTerm(result) 
          }) 
          .catch(error => console.log('error', error));
    }, []);
    function clickedToggle(getIndex){
        newsResult.map((portfolio_list, index)=>{ 
            if((index) === getIndex){

                fetch(global.portfolioAPI_summary+portfolio_list[0], global.requestOptions)
                .then(response => response.json())  
                .then(result => { 
                    result.map((portfolio_item, index1)=>{ 
                        showPortfolio.push({ portfolio_title: portfolio_item[0], portfolioLast : portfolio_item[1], portfoliopercentCNG : portfolio_item[2], portfoliopercent3M : portfolio_item[3], 
                        portfolioPercentYTD : portfolio_item[4], portfolioPercent1YR : portfolio_item[5], portfolioPct3MStart : portfolio_item[11], portfolioPctYTDStart : portfolio_item[12], portfolioPct1YRStart : portfolio_item[13] }); 
                    }) 
                    document.getElementById("selectedPortName").innerHTML = '<h5>'+showPortfolio[0].portfolio_title+'</h5>';
                    document.getElementById("idPortListBx").innerHTML = '';
                    showPortfolio.map((showPortfolio, startIndex) =>{
                        let portfolio_title = showPortfolio.portfolio_title;
                        let portfolioLast = showPortfolio.portfolioLast;                        
                        let portfoliopercentCNG = showPortfolio.portfoliopercentCNG;
                        let portfoliopercent3M = showPortfolio.portfoliopercent3M;
                        let portfolioPercentYTD = showPortfolio.portfolioPercentYTD;
                        let portfolioPercent1YR = showPortfolio.portfolioPercent1YR;
                    if(startIndex >= 1){
                        document.getElementById("idPortListBx").innerHTML +=                        
                        `<li class="pfWsListContentLiRow">
                            <ul class="pfWsListContentBody">
                                <li class="liveStreamTicker">`+portfolio_title+`</li>
                                <li class="liveStreamMark`+portfolio_title+` `+(portfoliopercentCNG < 0 ? `pfWsListContentRedText` : (portfoliopercentCNG > 0 ? `pfWsListContentGreenText` : `colorgray`))+`">`+ portfolioLast +`</li>
                                <li class="liveStreamChange`+ portfolio_title+` `+(portfoliopercentCNG < 0 ? `pfWsListContentRedText` : (portfoliopercentCNG > 0 ? `pfWsListContentGreenText` : `colorgray`))+`">`+ portfoliopercentCNG +`</li>
                                <li class="liveStream3MChange`+ portfolio_title+` `+(portfoliopercent3M < 0 ? `pfWsListContentRedText` : (portfoliopercent3M > 0 ? `pfWsListContentGreenText` : `colorgray`))+`">`+ portfoliopercent3M +`</li>
                                <li class="liveStreamYTDChange`+ portfolio_title+` `+(portfolioPercentYTD < 0 ? `pfWsListContentRedText` : (portfolioPercentYTD > 0 ? `pfWsListContentGreenText` : `colorgray`))+`">`+ portfolioPercentYTD +`</li>
                                <li class="liveStream1YChange`+ portfolio_title+` `+(portfolioPercent1YR < 0 ? `pfWsListContentRedText` : (portfolioPercent1YR > 0 ? `pfWsListContentGreenText` : `colorgray`))+`">`+ portfolioPercent1YR +`</li>
                            </ul>
                            <input id="liveStream3MStart`+portfolio_title+`" type="hidden" value="`+showPortfolio.portfolioPct3MStart+`"/>
                            <input id="liveStreamYTDStart`+portfolio_title+`" type="hidden" value="`+showPortfolio.portfolioPctYTDStart+`"/>
                            <input id="liveStream1YRStart`+portfolio_title+`" type="hidden" value="`+showPortfolio.portfolioPct1YRStart+`"/>
                        </li>`;
                    }                 
                    })                    
                }) 
            }
        });
    }
  return ( 
    <>  
    <div className="" onClick={()=>setShowWelcome(!showWelcome)}>
        <div className="portfolioDropdown" id="portfolioDropdown">
            <div className="portfolioList">
                <div onClick={()=>setShowWelcome(!showWelcome)}>
                    <div className="portDropIcon">{iconfaColumns}</div>
                </div>
                {
                    <div>
                        <div className="my_dropdown">                                            
                            <div className="portDropList" id="portDropList">
                                <ul onClick={()=>setShowWelcome(!showWelcome)}>
                                    { newsResult.map((dup_array, index1)=>{ 
                                        if(index1>=0){
                                        return(
                                            <li className={toggleState === index1 ? "tabs active-tabs":"tabs"} onClick={()=>clickedToggle(index1)}>{dup_array[1]}</li>
                                            )
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                        </div>  
                    </div>
                }                             
            </div>                  
        </div>
       <section className="portfoliowatchlist bxCalenders" onClick={()=>setShowWelcome(!showWelcome)}> 
            <div className="pfWsListContent_ticker">
                <div className="selectedPortName" id="selectedPortName">
                { newsResult1.map((arrPortTable, index1)=>{ 
                        if(index1 === 0 ){
                            return (
                               <h5>{  arrPortTable[0] }</h5>
                            )
                        }
                    })
                }
                </div>
                <div className="pfWsListContentHeader" id="pfWsListContentHeader">
                    <ul>
                        <li>Ticker</li>
                        <li>Last</li>
                        <li>% ChG</li>
                        <li>% 3M</li>
                        <li>% YTD</li>
                        <li>% 1YR</li>
                    </ul>
                </div>
            </div>    
            <div className="pfWsListContent" onClick={()=>setShowWelcome(!showWelcome)}>
                <div className="contentbx"> 
                    <ul id="idPortListBx">
                        <li className="content active-content">
                            <div className="APIportfolioData">                           
                                <ul>                                     
                                { 
                                    newsResult1.map((arrPortTable, index1)=>{ 
                                        if(index1 >=1){
                                        return(
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="liveStreamTicker">{arrPortTable[0]}</li>
                                                <li className={"liveStreamMark"+arrPortTable[0]+" "+ (arrPortTable[2] === 0 ? "colorgray" : (arrPortTable[2] > 0 ? "pfWsListContentGreenText" : "pfWsListContentRedText"))}>{arrPortTable[1]}</li>
                                                <li className={"liveStreamChange"+arrPortTable[0]+" "+ (arrPortTable[2] === 0 ? "colorgray" : (arrPortTable[2] > 0 ? "pfWsListContentGreenText" : "pfWsListContentRedText"))}>{arrPortTable[2]}</li>
                                                <li className={"liveStream3MChange"+arrPortTable[0]+" "+ (arrPortTable[3] === 0 ? "colorgray" : (arrPortTable[3] > 0 ? "pfWsListContentGreenText" : "pfWsListContentRedText"))}>{arrPortTable[3]}</li>
                                                <li className={"liveStreamYTDChange"+arrPortTable[0]+" "+ (arrPortTable[4] === 0 ? "colorgray" : (arrPortTable[4] > 0 ? "pfWsListContentGreenText" : "pfWsListContentRedText"))}>{arrPortTable[4]}</li>
                                                <li className={"liveStream1YChange"+arrPortTable[0]+" "+ (arrPortTable[5] === 0 ? "colorgray" : (arrPortTable[5] > 0 ? "pfWsListContentGreenText" : "pfWsListContentRedText"))}>{arrPortTable[5]}</li>
                                            </ul>
                                            <input id={"liveStream3MStart"+arrPortTable[0]} type="hidden" value={arrPortTable[11]}/>
                                            <input id={"liveStreamYTDStart"+arrPortTable[0]} type="hidden" value={arrPortTable[12]}/>
                                            <input id={"liveStream1YRStart"+arrPortTable[0]} type="hidden" value={arrPortTable[13]}/>
                                        </li>
                                        )
                                        }
                                    })
                                }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
           </div>
        </section>
    </div>
    </>
  );
}

export default APItabsPortfolio;