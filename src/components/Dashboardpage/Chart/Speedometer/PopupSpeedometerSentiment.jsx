import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
function PopupSpeedometerSentiment() {
  var currentValueEconomy;
  const [dialsResult, setDialsResult] = useState({});
  global.dialsSentimentalResult <= 1? (currentValueEconomy = "Recession") : global.dialsSentimentalResult <= 2 ? (currentValueEconomy="Recession Risk"): global.dialsSentimentalResult <= 3 ? (currentValueEconomy="Neutral") : global.dialsSentimentalResult <= 4? (currentValueEconomy="Neutral+"): (currentValueEconomy="Strong")
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

        value={global.dialsSentimentalResult}
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
export default PopupSpeedometerSentiment;
