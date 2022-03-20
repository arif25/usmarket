import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
function PopupSpeedometerValuation() {
  var currentValueEconomy;
  const [dialsResult, setDialsResult] = useState({});
  global.dialsValuationResult <= 1? (currentValueEconomy = "Recession") : global.dialsValuationResult <= 2 ? (currentValueEconomy="Recession Risk"): global.dialsValuationResult <= 3 ? (currentValueEconomy="Neutral") : global.dialsValuationResult <= 4? (currentValueEconomy="Neutral+"): (currentValueEconomy="Strong")
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

        value={ global.dialsValuationResult }
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
export default PopupSpeedometerValuation;
