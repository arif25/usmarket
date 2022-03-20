import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
function SpeedometerValuation() {
  return (    
    <>
    <div className="radioMarketSentimentIndex">
      <div className="titlebxmarketSentiIndex">
        <h5>MT: VOLATILITY INDEX (VIX)</h5>
      </div>
      <div className="titlebxmarketSentiMeter">
        <ReactSpeedometer        
          segments={5}
          maxValue={5}
          width={300}
          height={200}  
          value={3.5}
          currentValueText= {"Neutral"}
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
    </div>
    </>
  );
}
export default SpeedometerValuation;
