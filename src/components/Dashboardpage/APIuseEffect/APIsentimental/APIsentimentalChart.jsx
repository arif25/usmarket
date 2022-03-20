import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// var flagcalluseEffect = 0;
export default function APIsentimentalChart() { 
  var unixTimeData;
   unixTimeData =[{"time":"", "close":""}];   
   var unixTimeUnique =[{"time":2001}];
  const [newsResult, setNewsResult] = useState({}); 

  var output = [], item;
  // var unixTimeData =[];   
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
  // var output_Economy = [], item_Economy;
  // var unixTimeData_Economy =[];   
  // var testarray_Economy =[];   
  // var testclosearray_Economy = [];
  // var arr3_Economy = [];        
  for (var type in global.chartAPIresult.economyChartData) {
      item = {};
      item.y_axis =Object.values(global.chartAPIresult.economyChartData);
      item.x_axis =Object.keys(global.chartAPIresult.economyChartData);
      output.push(item);
  } 
    return (
      <>  
        { newsResult && newsResult.sentimentChartData && newsResult.sentimentChartData.result  && newsResult.sentimentChartData.result.ticks.map(article => 
            {
              const date = new Date(article.unixTime*1000).toLocaleDateString('en-US');
              unixTimeData.push({ Date:date, close: article.close });
              unixTimeUnique.push({ time:date })
            }
        ) }          
        { 
        unixTimeData.map(quoteResult=>{ 
          return <div>
         </div>
         }) }

      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart 
          data={unixTimeData}
          margin={{
            top: 10, right: 0, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid horizontal="" vertical="" />
          <XAxis dataKey="Date" tick={{stroke:"#ccc", fontSize:"12px", fontWeight:"100", textTransform: 'capitalize'}} />
          <YAxis dataKey="close" tick={{stroke:"#ccc", fontSize:"12px", fontWeight:"100", textTransform: 'capitalize'}} />
          <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
          <Area dataKey="Date" stroke="#e0964f" fill="#222846" />
          <Area dataKey="close" stroke="#e0964f" fill="#222846" />
        </AreaChart>
      </ResponsiveContainer>
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
            arr3 = quoteResult.time.map((el,i)=>{              
              const date = new Date(el*1000).toLocaleDateString('en-US');
              var closevalue = parseFloat(quoteResult.close[i]).toFixed(2) 
              return {"Date":date, "close":closevalue} })   
          }) 
      }
       { 
        unixTimeData.map(quoteResult=>{ 
          return <div>
         </div>
         }) 
      }
      <>
     <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart 
          data={arr3}
          margin={{
            top: 10, right: 0, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid horizontal="" vertical="" />
          <XAxis dataKey="Date" tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}} />
          <YAxis dataKey="close" tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}}  />
          <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
          <Area dataKey="Date" stroke="#e0964f" fill="#222846" />
          <Area dataKey="close" stroke="#e0964f" fill="#222846" />
        </AreaChart>
      </ResponsiveContainer>
      </>
      <> 
      { output.map((article, index)  =>       
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
            arr3 = quoteResult.time.map((el,i)=>{
              const date = new Date(el*1000).toLocaleDateString('en-US');
              var closevalue = parseFloat(quoteResult.close[i]).toFixed(2) 
              return {"Date":date, "close":closevalue} })
          })
      }
       { 
        unixTimeData.map(quoteResult=>{ 
          return <div>
         </div>
         }) 
      }
     <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart 
          data={arr3}
          margin={{
            top: 10, right: 0, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid horizontal="" vertical="" />
          <XAxis dataKey="Date" tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}} />
          <YAxis dataKey="close" tick={{stroke:"#fff", fontSize:"12px", fontWeight:"100"}}  />
          <Area dataKey="Date" stroke="#e0964f" fill="#222846" />
          <Area dataKey="close" stroke="#e0964f" fill="#222846" />
          <Tooltip wrapperStyle={{ textTransform: "Capitalize", fontSize: 10, fill: "f00", padding: 0, margin:0 }}/>
        </AreaChart>
      </ResponsiveContainer>
    </>

    </>
    );
}

