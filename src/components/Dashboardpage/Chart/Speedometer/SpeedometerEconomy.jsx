import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import $ from 'jquery';
function SpeedometerEconomy() {
    var currentValueEconomy;
    if(global.dialsEconomyResult === 'undefined' || global.dialsEconomyResult === '' || global.dialsEconomyResult == null){ 
    }
    else { 
      global.dialsEconomyResult <= 1? (currentValueEconomy = "Recession") : global.dialsEconomyResult <= 2 ? (currentValueEconomy="Recession Risk"): global.dialsEconomyResult <= 3 ? (currentValueEconomy="Neutral") : global.dialsEconomyResult <= 4? (currentValueEconomy="Neutral+"): (currentValueEconomy="Strong")
    }
  return (
    <>
    <div className="App">       
      <ReactSpeedometer        
        segments={5}
        maxValue={5}
        value={global.dialsEconomyResult}
        size= {50}
        width={300}
        height={200}        
        currentValueText={currentValueEconomy}
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

export default SpeedometerEconomy;
