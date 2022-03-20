import React, { useState } from 'react'

function APIquoteChartDetails() {
    var quoteTitleData;
    quoteTitleData =[];
   const [newsResult, setNewsResult] = useState({});
   React.useEffect(() => {
     fetch(global.quoteAPI, global.requestOptions)
       .then(response => response.json())  
       .then(result => setNewsResult(result))
   }, []);    
  return (
    <>     
    { 
    newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.slice(0, 1).map(homeChartDataList =>   
        {
            quoteTitleData.push({ high: homeChartDataList.result.highClosePrice, low: homeChartDataList.result.lowClosePrice,  symbol: homeChartDataList.result.symbol, volume: homeChartDataList.result.cumulativeVolume, })
        }  
     ) }
     { 
     quoteTitleData.map(quoteTitle=>{ 
       return (
       <div>
            <div className="contentChartQuote">
                <div className="quoteLeftContent">
                    <div className="contentChartQuote_left">                  
                        <ul>
                            <li>{quoteTitle.symbol}</li>
                            <li>HIGH: {quoteTitle.high}</li>
                            <li>LOW: {quoteTitle.low}</li>
                        </ul>
                    </div>
                    <div className="contentChartQuote_right">
                        <ul>
                        </ul>
                    </div>
                </div>                  
                <div className="quoteRightContent">
                    <h4>1 Month</h4>
                </div>
            </div>
        </div>     
     )}) 
     }
     </>
  );
}
export default APIquoteChartDetails;