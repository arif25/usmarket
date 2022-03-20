
import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
// Sample chart data
const pdata = [
  {
      name: 5.00,
      Yield: 1,
      Duration: 0
  },
  {
      name: 10.00,
      Yield: 15,
      Duration: 10
  },
  {
      name: 15.00,
      Yield: 45,
      Duration: 30
  },
  {
      name: 20.00,
      Yield: 55,
      Duration: 50
  },
  {
      name: 25.00,
      Yield: 90,
      Duration: 80
  },
  {
      name: 30.00,
      Yield: 110,
      Duration: 100
  },
];

function ForexUsd(){
    return (
        <>
          <div className="ForexUsd">
              <div className="marketTopTitles">
                  <h3>Markets</h3>
                  <div className="marketsBtns marketsBtnsBack" id="treasuryBtnsBack">
                      <a href="#">Back</a>
                  </div>
              </div>
              <div className="itemMarketTitle">
                <h4>Treasury Yield Curve</h4>
              </div>
          </div>
          <section className="secTreasuryYield">
            <article>
              <ul>
                <li>Current Day Yields</li>  
                <li>Previous Day Yields</li>  
              </ul>  
            </article>  
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="Yield" type="monotone" stroke="#2ab220" activeDot={{ r: 8 }} />
                    <Line dataKey="Duration" type="monotone" stroke="#f9fd36" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
          </section>
        </>
    )
}
export default ForexUsd; 
