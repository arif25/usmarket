import React, {useState} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SpeedometerEconomy from '../Chart/Speedometer/SpeedometerEconomy';
import SpeedometerValuation from '../Chart/Speedometer/SpeedometerValuation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import APIsentimentalChart from '../APIuseEffect/APIsentimental/APIsentimentalChart';
import APIvaluationsChart from '../APIuseEffect/APIvaluation/APIvaluationsChart.jsx';
import APIeconomysChart from '../APIuseEffect/APIeconomy/APIeconomysChart';
import ReactSpeedometer from "react-d3-speedometer";
import PopupSpeedometerValuation from '../Chart/Speedometer/PopupSpeedometerValuation';
import $ from 'jquery';
const iconfaExchangeAlt = <FontAwesomeIcon icon={faExchangeAlt} />

var flagcalluseEffect = 0;
var flagUseeffect = 0
function Economygraph(){ 
    var currentValueEconomy;
    const [dialsResult, setDialsResult] = useState({});
  
    React.useEffect(() => {  
        if(flagUseeffect <= 1){  
          setTimeout(function(){
            flagUseeffect = flagUseeffect + 1; 
            fetch(global.APICharts_futuresAndDials, global.requestOptions)
            .then(response => response.json())  
            .then(result => setDialsResult(result)) 
          },2000)
        }

    }, [flagUseeffect]);
  
  var clearInter = setInterval(asignEcoDialsValue,2000)
  function asignEcoDialsValue(){
    if(dialsResult.economyDial === 'undefined' || dialsResult.economyDial === '' || dialsResult.economyDial == null){
      if(global.dialsEconomyResult === 'undefined' || global.dialsEconomyResult === '' || global.dialsEconomyResult == null){
      }
      else {
        myStopFunction();
      }
    }
    else{
      global.dialsEconomyResult = parseFloat(dialsResult.economyDial[0]).toFixed(1);
      global.dialsValuationResult = parseFloat(dialsResult.valuationDial[0]).toFixed(1);
      global.dialsSentimentalResult = parseFloat(dialsResult.sentimentDial[4]).toFixed(1);
      if( global.dialsEconomyResult >= 0 ){
      } 
      myStopFunction()
    }
  }

  function myStopFunction() {
    clearInterval(clearInter);
  }
    var unixTimeData;
    unixTimeData =[{"time":"", "close":""}];   
    var unixTimeUnique =[{"time":2001}];
   const [newsResult, setNewsResult] = useState({});
 
   React.useEffect(() => {
       if(flagcalluseEffect >=1){
       }
       else{
         flagcalluseEffect = flagcalluseEffect+1;
         fetch(global.APIdials_dialChartData225, global.requestOptions)
         .then(response => response.json())  
         .then(result => setNewsResult(result))
       } 
   }, []); 
   var output = [], item;
   var unixTimeData =[];   
   var testarray =[];   
   var testclosearray = [];
   var arr3 = [];
   global.chartAPIresult = newsResult;
   for (var type in global.chartAPIresult.valuationChartData) {
       item = {};
       item.y_axis =Object.values(global.chartAPIresult.valuationChartData);
       item.x_axis =Object.keys(global.chartAPIresult.valuationChartData);       
       global.newsResult.push(item);
   }   
   var output_Economy = [], item_Economy;
   var unixTimeData_Economy =[];   
   var testarray_Economy =[];   
   var testclosearray_Economy = [];
   var arr3_Economy = [];        
   for (var type in global.chartAPIresult.economyChartData) {
       item = {};
       item.y_axis =Object.values(global.chartAPIresult.economyChartData);
       item.x_axis =Object.keys(global.chartAPIresult.economyChartData);
       output.push(item);
   } 
    let areaChartEconomy = [];
    let speedometerEconomy = [];
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
    // Dials Economy
    var currentValueEconomy;
    if(global.dialsEconomyResult === 'undefined' || global.dialsEconomyResult === '' || global.dialsEconomyResult == null){ 
    }
    else { 
      global.dialsEconomyResult <= 1? (currentValueEconomy = "Recession") : global.dialsEconomyResult <= 2 ? (currentValueEconomy="Recession Risk"): global.dialsEconomyResult <= 3 ? (currentValueEconomy="Neutral") : global.dialsEconomyResult <= 4? (currentValueEconomy="Neutral+"): (currentValueEconomy="Strong")
    }
// Dials Valuation
var currentValueValuation;
if(global.dialsValuationResult === 'undefined' || global.dialsValuationResult === '' || global.dialsValuationResult == null){ 
}
else { 
    global.dialsValuationResult <= 1? (currentValueValuation = "Recession") : global.dialsValuationResult <= 2 ? (currentValueValuation="Recession Risk"): global.dialsValuationResult <= 3 ? (currentValueValuation="Neutral") : global.dialsValuationResult <= 4? (currentValueValuation="Neutral+"): (currentValueValuation="Strong")
 }
var currentValueSentimental;
if(global.dialsSentimentalResult === 'undefined' || global.dialsSentimentalResult === '' || global.dialsSentimentalResult == null){ 
}
else { 
    global.dialsSentimentalResult <= 1? (currentValueSentimental = "Very Bearish") : global.dialsSentimentalResult <= 2 ? (currentValueSentimental="Bearish"): global.dialsSentimentalResult <= 3 ? (currentValueSentimental="Neutral") : global.dialsSentimentalResult <= 4? (currentValueSentimental="Bulish"): (currentValueSentimental="Very Bullish")
}

if(currentValueEconomy){
    $("#economyCurrentText").show(500)
}
if(currentValueValuation){
    $("#valuationCurrentText").show(500)
}
if(currentValueSentimental){
    $("#sentimentalCurrentText").show(500)
}

    return <section className="secgraph">  
        <>   
        { newsResult && newsResult.sentimentChartData && newsResult.sentimentChartData.result  && newsResult.sentimentChartData.result.ticks.map(article => 
            {
              const date = new Date(article.unixTime*1000).toLocaleDateString('en-US');
              unixTimeData.push({ Date:date, close: article.close });
              unixTimeUnique.push({ time:date })
            }
        ) }
      { global.newsResult.map((article, index)  =>       
          {
            if(index > 1 && index < 3){
              unixTimeData.push({ time: article.x_axis, close: parseFloat(article.y_axis).toFixed(2) })
              testarray.push({time: article.x_axis, close: article.y_axis})
              testclosearray.push({close: article.y_axis})              
            }    
            else{  
            }        
          }
      )   
      }
      { 
        testarray.map((quoteResult,index)=>{ 
          quoteResult.close.map(test2=> {
          })
          arr3_Economy = quoteResult.time.map((el,i)=>{              
              const date = new Date(el*1000).toLocaleDateString('en-US');
              var closevalue = parseFloat(quoteResult.close[i]).toFixed(2) 
              return {"Date":date, "close":closevalue} })   
          }) 
      }
      <> 
      { output.map((article, index)  =>       
          {
            if(index > 1 && index < 3){
              unixTimeData.push({ time: article.x_axis, close: parseFloat(article.y_axis).toFixed(2) })
              testarray.push({time: article.x_axis, close: article.y_axis, yminval: (article.y_axis)-2 })
              testclosearray.push({close: article.y_axis})
            }    
            else{  
            }        
          }
      )   
      }
      { 
        testarray.map((quoteResult,index)=>{ 
          quoteResult.close.map(test2=> {
          })
            arr3 = quoteResult.time.map((el,i)=>{
              const date = new Date(el*1000).toLocaleDateString('en-US');

              var closevalue = parseFloat(quoteResult.close[i]).toFixed(2) 
              return {"Date":date, "close":closevalue} })
          })
      }
    </>
    </>
    <div className="itemgraph">
        <div className="bxItemDialsCharts">
            <div className="graphTitle">Economy</div>
            <div className="graphContent">
                <div className="gameChanger">
                    <p id="click_1_Economy">{iconfaExchangeAlt}</p>
                    <p id="click_2_Economy">{iconfaExchangeAlt}</p>
                </div>

                <div className="areaChartEconomy" id="open_1_Economy_chart">
                        <div className="App">       
                        <ReactSpeedometer        
                            segments={5}
                            maxValue={5}
                            needleHeightRatio={0.5}
                            ringWidth={50}
                            segments={5}
                            segmentColors={[
                                "#fc0202",
                                "#eb6e2c",
                                "#ffff00",
                                "#04fd03",
                                "#0506d9"
                            ]}
                            needleColor="#a3a8ac"

                            value={global.dialsEconomyResult}
                            size= {50}
                            width={300}
                            height={180}        
                            currentValueText={" "}
                            customSegmentLabels={[
                            {
                                text: 1,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 2,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 3,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 4,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 5,
                                position: "INSIDE",
                                color: "#000"
                            },
                            ]}
                        />
                        <h5 id="economyCurrentText">{currentValueEconomy}</h5>
                        </div>
                </div>
                <div id="open_2_Economy_dials"> 
                    <ResponsiveContainer width="100%" aspect={2}>
                        <AreaChart 
                        data={arr3_Economy}
                        margin={{
                            top: 10, right: 0, left: 0, bottom: 0,
                        }}
                        >
                        <CartesianGrid horizontal="" vertical="" />
                        <XAxis dataKey="Date" tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}} />
                        <YAxis 
                            dataKey="close" 
                            tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}}  
                            type="number" domain={[3, "close"]} 
                        />
                        <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
                        <Area dataKey="Date" stroke="#e0964f" fill="#f00" />
                        <Area dataKey="close" stroke="#e0964f" fill="#f00" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>                        
            </div>
        </div>
    </div>
    <div className="itemgraph">
        <div className="bxItemDialsCharts">
            <div className="graphTitle">Valuation</div>
            <div className="graphContent"> 
                <div className="gameChanger">
                    <p id="click_1_valuation">{iconfaExchangeAlt}</p>
                    <p id="click_2_valuation">{iconfaExchangeAlt}</p>
                </div>
                <div className="areaChartValuation" id="open_1_valuation_chart"> 
                   
                        <div className="App">
                        <ReactSpeedometer        
                            segments={5}
                            maxValue={5}

                            needleHeightRatio={0.5}
                            ringWidth={50}
                            segments={5}
                            segmentColors={[
                                "#fc0202",
                                "#eb6e2c",
                                "#ffff00",
                                "#04fd03",
                                "#0506d9"
                            ]}
                            needleColor="#a3a8ac"

                            width={300}
                            height={180}        
                            value={global.dialsValuationResult}
                            currentValueText= {" "}
                            customSegmentLabels={[
                            {
                                text: 1,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 2,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 3,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 4,
                                position: "INSIDE",
                                color: "#000"
                            },
                            {
                                text: 5,
                                position: "INSIDE",
                                color: "#000"
                            },
                            ]}
                        />
                        <h5 id="valuationCurrentText">{currentValueValuation}</h5>
                        </div>
                       
                </div>
                <div className="speedometerValuation" id="open_2_valuation_dials"> 
                    <ResponsiveContainer width="100%" aspect={2}>
                        <AreaChart 
                        data={arr3}
                        margin={{
                            top: 10, right: 0, left: 0, bottom: 0,
                        }}
                        >
                        <CartesianGrid horizontal="" vertical="" />
                        <XAxis dataKey="Date" tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}} />

                        <YAxis 
                            dataKey="close" 
                            tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}}  
                            type="number" domain={[3.5,"close"]}
                        />

                        <Area dataKey="Date" stroke="#e0964f" fill="#f00" />
                        <Area dataKey="close" stroke="#e0964f" fill="#f00" />

                        <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
<div className="itemgraph">
    <div className="bxItemDialsCharts">
        <div className="graphTitle">Sentiment</div>
        <div className="graphContent">
            <div className="gameChanger">
                <p id="click_1_sentimental">{iconfaExchangeAlt}</p>
                <p id="click_2_sentimental">{iconfaExchangeAlt}</p>
            </div>
            <div className="areaChartSentiment" id="open_1_sentimental_chart"> 
                                
                <div className="App DialsEconomy">       
                    <ReactSpeedometer        
                        segments={5}
                        maxValue={5}

                        needleHeightRatio={0.5}
                        ringWidth={50}
                        segments={5}
                        segmentColors={[
                          "#fc0202",
                          "#eb6e2c",
                          "#ffff00",
                          "#04fd03",
                          "#0506d9"
                        ]}
                        needleColor="#a3a8ac"

                        value={ global.dialsSentimentalResult }
                        size= {50}
                        width={300}
                        height={180}        
                        currentValueText={ " " }
                        customSegmentLabels={[
                        {
                            text: 1,
                            position: "INSIDE",
                            color: "#000"
                        },
                        {
                            text: 2,
                            position: "INSIDE",
                            color: "#000"
                        },
                        {
                            text: 3,
                            position: "INSIDE",
                            color: "#000"
                        },
                        {
                            text: 4,
                            position: "INSIDE",
                            color: "#000"
                        },
                        {
                            text: 5,
                            position: "INSIDE",
                            color: "#000"
                        },
                        ]}
                    />
                    <h5 id="sentimentalCurrentText">{currentValueSentimental}</h5>
                    </div>
            </div>
            <div className="speedometerSentiment"  id="open_2_sentimental_dials">   
                <ResponsiveContainer width="100%" aspect={2}>
                    <AreaChart 
                    data={unixTimeData}
                    margin={{
                        top: 10, right: 0, left: 0, bottom: 0,
                    }}
                    >
                    <CartesianGrid horizontal="" vertical="" />
                    <XAxis dataKey="Date" tick={{stroke:"#ccc", fontSize:"12px", fontWeight:"100", textTransform: 'capitalize'}} />

                    <YAxis 
                        dataKey="close" 
                        tick={{
                            stroke:"#fff", 
                            fontSize:"12px", fontWeight:"100"}} 
                            type="number" domain={["yminval", "close"]}
                    />
                    <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
                    <Area dataKey="Date" stroke="#e0964f" fill="#cd0800" />
                    <Area dataKey="close" stroke="#e0964f" fill="#cd0800" />
                    </AreaChart>
                </ResponsiveContainer> 
            </div>
        </div>
    </div>
</div> 
</section>
}
export default Economygraph;