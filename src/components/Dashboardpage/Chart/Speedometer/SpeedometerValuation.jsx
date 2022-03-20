import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
function SpeedometerValuation() {
  var currentValueEconomy;
  global.dialsValuationResult <= 1? (currentValueEconomy = "Recession") : global.dialsValuationResult <= 2 ? (currentValueEconomy="Recession Risk"): global.dialsValuationResult <= 3 ? (currentValueEconomy="Neutral") : global.dialsValuationResult <= 4? (currentValueEconomy="Neutral+"): (currentValueEconomy="Strong")
  return (    
    <>
    <div className="App">
      <ReactSpeedometer        
        segments={5}
        maxValue={5}
        width={300}
        height={200}  
        value={global.dialsValuationResult}
        currentValueText= {currentValueEconomy}
        customSegmentLabels={[
          {
            text: 1,
            position: "INSIDE",
            color: "#555",
          },
          {
            text: 2,
            position: "INSIDE",
            color: "#555",
          },
          {
            text: 3,
            position: "INSIDE",
            color: "#555",
            fontSize: "19px",
          },
          {
            text: 4,
            position: "INSIDE",
            color: "#555",
          },
          {
            text: 5,
            position: "INSIDE",
            color: "#555",
          },
        ]}
      />
    </div>
    </>
  );
}
export default SpeedometerValuation;
