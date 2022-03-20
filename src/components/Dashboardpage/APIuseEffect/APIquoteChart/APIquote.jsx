import React, { useState } from "react";
function APIquote(){  
  const unixTimeData =[{"unixTime":"1632168000", "ticksClose":"444.87"}];
  const [newsResult, setNewsResult] = useState({});
  React.useEffect(() => {
    fetch(global.APIquote, global.requestOptions)
      .then(response => response.json())  
      .then(result => setNewsResult(result))
  }, []);
  
  return(
    <>     
       { newsResult && newsResult.homeChartDataList && newsResult.homeChartDataList.map(article =>         
            article.result.ticks.map(tick=>
            {
              unixTimeData.push({ unixTime: tick.unixTime, ticksClose: tick.unixTime })
            }
              )        
        ) }
        { unixTimeData.map(c=>{ 
          return <div>
            {c.unixTime}
            {c.ticksClose}
          </div>
         }) }
    </>
);
}
export default APIquote;