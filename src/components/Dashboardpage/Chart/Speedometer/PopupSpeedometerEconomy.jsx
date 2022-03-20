import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import $ from 'jquery';
function PopupSpeedometerEconomy() {
  var currentValueEconomy;
  const [dialsResult, setDialsResult] = useState({});

  React.useEffect(() => {    
    fetch(global.APICharts_futuresAndDials, global.requestOptions)
      .then(response => response.json())  
      .then(result => setDialsResult(result)) 
  }, []);

var clearInter = setInterval(window.asignEcoDialsValue,2000)
window.asignEcoDialsValue = ()=>{
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
    myStopFunction()
  }
}

function myStopFunction() {
  clearInterval(clearInter);
}

global.dialsEconomyResult <= 1? (currentValueEconomy = "Recession") : global.dialsEconomyResult <= 2 ? (currentValueEconomy="Recession Risk"): global.dialsEconomyResult <= 3 ? (currentValueEconomy="Neutral") : global.dialsEconomyResult <= 4? (currentValueEconomy="Neutral+"): (currentValueEconomy="Strong")

  return (
    <>
    <div className="App">
      <ReactSpeedometer        
        segments={5}
        maxValue={5}

        needleHeightRatio={0.4}
        ringWidth={25}
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
        width={ 140 }
        height={ 80 }
        currentValueText={" "}
        customSegmentLabels={[ 
          {
            text: 1,
            position: "INSIDE",
            color: "#000",
            fontSize: "12px"
          },
          {
            text: 2,
            position: "INSIDE",
            color: "#000",
            fontSize: "12px"
          },
          {
            text: 3,
            position: "INSIDE",
            color: "#000",
            fontSize: "12px"
          },
          {
            text: 4,
            position: "INSIDE",
            color: "#000",
            fontSize: "12px"
          },
          {
            text: 5,
            position: "INSIDE",
            color: "#000",
            fontSize: "12px"
          },
        ]}
      />
      <h5>{currentValueEconomy}</h5>
    </div>
    </>
  );
}

export default PopupSpeedometerEconomy;
