import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function QuoteDynamic(){
    var yminvalue = 10;
    var cloned;
    var quoteContent = [];
    var ChartDataListlength;
    var unixTimeChartData =[];
    var unixTimeData =[];
    var unixTimeData2 =[];
    var unixTimeData3 =[];
    var unixTimeData4 =[];
     unixTimeData =[{"time":"", "close":""}];
    const [newsResult, setNewsResult] = useState({});
    React.useEffect(() => {
        
      fetch(global.APIquote, global.requestOptions)
        .then(response => response.json())  
        .then(result => setNewsResult(result))
        .catch(error => console.log('error', error));  
    }, []); 
    return (
        <>    
{ newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.map((article, index) =>    
          {     
            ChartDataListlength = newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.length;
            for(let i = 0; i < ChartDataListlength; i++) { 
                newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.slice(i, i+1).map(article =>   
                {  
                    quoteContent.push({ high: article.result.highClosePrice, low: article.result.lowClosePrice,  symbol: article.result.symbol, volume: article.result.cumulativeVolume, })

                    article.result.ticks.map(tick=>
                    {
                        const fulldate = new Date(tick.unixTime*1000).toLocaleDateString('en-US');
                    const date = new Date(tick.unixTime*1000)
                    const dateMonth = date.getMonth()
                   
                        unixTimeChartData.push({ Date: fulldate, Close: tick.close });                    
                    }
                    )
                })
              if(i === 0 && index === 0){
              newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.slice(i, i+1).map(article =>   
                { 
                    article.result.ticks.map(tick=>
                    {
                        var yminvalue = 150
                        const fulldate = new Date(tick.unixTime*1000).toLocaleDateString('en-US');
                    const date = new Date(tick.unixTime*1000).getFullYear();
                    const dateMonth = new Date(tick.unixTime*1000).getMonth();
                   
                        unixTimeData.push({ Date: fulldate, Close: tick.close, yminval: (tick.close)-2 });
                    }
                    )
                })
            }
            else if(i === 1 && index === 1){
              newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.slice(i, i+1).map(article =>   
                {                     
                  article.result.ticks.map(tick=>
                  {
                    const fulldate = new Date(tick.unixTime*1000).toLocaleDateString('en-US');
                    const date = new Date(tick.unixTime*1000).getFullYear();
                    const dateMonth = new Date(tick.unixTime*1000).getMonth();
                   
                    unixTimeData2.push({ Date: fulldate, Close: tick.close, yminval: (tick.close)-2 });
                  }
                    )
                })
            }
            else if(i === 2 && index === 2){
              newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.slice(i, i+1).map(article =>   
                {  
                  article.result.ticks.map(tick=> 
                  {
                    const fulldate = new Date(tick.unixTime*1000).toLocaleDateString('en-US');
                    const date = new Date(tick.unixTime*1000).getFullYear();
                    
                    const dateMonth = new Date(tick.unixTime*1000).getMonth();
                   
                    unixTimeData3.push({ Date: fulldate, Close: tick.close, yminval: (tick.close)-2 });
                  }
                    )
                })
            }
            else if(i === 3 && index === 3){
              newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.slice(i, i+1).map(article =>   
                {    
                  article.result.ticks.map(tick=>
                  {
                    const fulldate = new Date(tick.unixTime*1000).toLocaleDateString('en-US');
                    const date = new Date(tick.unixTime*1000).getFullYear();
                    const dateMonth = new Date(tick.unixTime*1000).getMonth();

                    unixTimeData4.push({ Date: fulldate, Close: tick.close, yminval: (tick.close)-2 });
                  }
                    )
                })
            }
          } 
          }
        ) }
        <Carousel>
            { quoteContent.map((quoteTitle, index)=>{  
                if(index < 5){
                    if(index === 0){
                        cloned = Array.from(unixTimeData);
                    }
                    else if(index === 1){
                        cloned = Array.from(unixTimeData2);
                    }
                    else if(index === 2){
                        cloned = Array.from(unixTimeData3);
                    }
                    else if(index === 3){
                        cloned = Array.from(unixTimeData4);
                    }               
                    return(
                    <Carousel.Item>
                        <div className="quoteTitleData">
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
                                    </div>                  
                                    <div className="quoteRightContent">
                                        <h4>1 Month</h4>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="itemMarketsCarousel secQuoteSwiper">
                            <ResponsiveContainer width="100%" aspect={3}>
                                <AreaChart 
                                    data={cloned}
                                    margin={{
                                        top: 10, right: 0, left: 0, bottom: 0,
                                    }}
                                    >
                                    <CartesianGrid horizontal="" vertical="" />
                                    <XAxis dataKey="Date" tick={{stroke:"#fff", fontSize:"10px", fontWeight:"100"}} />
                                    <YAxis dataKey="Close" tick={{stroke:"#fff", fontSize:"10px", fontWeight:"100"}} domain={["yminval", "Close"]}/>

                                    <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
                                    <Area type="" dataKey="Date" stroke="#0099e5" fill="#015883" />
                                    <Area type="" dataKey="Close" stroke="#0099e5" fill="#015883" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div> 
                    </Carousel.Item>
                    )
                }
                })
            }
            </Carousel>
        </>
    )
}
export default QuoteDynamic;