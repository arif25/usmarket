import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// var flagcalluseEffect = 0;
export default function APIvaluationsChart() { 
    const [newsResult, setNewsResult] = useState({}); 
    // var output = [];
    var item;
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
    return (
      <> 
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

          <Area dataKey="Date" stroke="#e0964f" fill="#f00" />
          <Area dataKey="close" stroke="#e0964f" fill="#f00" />
        </AreaChart>
      </ResponsiveContainer>
    </>
    );
}

