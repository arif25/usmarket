import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data1 = [
  {
    name: 'Page A',
    uv: 2.0,
  },
  {
    name: 'Page B',
    uv: 2.5,
  },
  {
    name: 'Page C',
    uv: 3.0,
  },
  {
    name: 'Page D',
    uv: 3.5,
  },
  {
    name: 'Page E',
    uv: 4.0,
  },
  {
    name: 'Page B',
    uv: 0.5,
  },
  {
    name: 'Page C',
    uv: 3.0,
  },
  {
    name: 'Page D',
    uv: 3.5,
  },
  {
    name: 'Page E',
    uv: 4.0,
  },
  {
    name: 'Page B',
    uv: 2.5,
  },
  {
    name: 'Page C',
    uv: 3.0,
  },
  {
    name: 'Page D',
    uv: 3.5,
  },
  {
    name: 'Page B',
    uv: 2.5,
  },
  {
    name: 'Page C',
    uv: 3.0,
  },
  {
    name: 'Page D',
    uv: 3.5,
  },
  {
    name: 'Page B',
    uv: 2.5,
  },
  {
    name: 'Page C',
    uv: 3.0,
  },
  {
    name: 'Page D',
    uv: 1.5,
  },
  {
    name: 'Page C',
    uv: 5.0,
  },
  {
    name: 'Page D',
    uv: 3.5,
  },
  {
    name: 'Page B',
    uv: 2.5,
  },
  {
    name: 'Page C',
    uv: 3.0,
  },
  {
    name: 'Page D',
    uv: 1.5,
  },
  {
    name: 'Page E',
    uv: 4.0,
  },
  {
    name: 'Page F',
    uv: 4.5,
  },
  {
    name: 'Page C',
    uv: 4.0,
  },
  {
    name: 'Page D',
    uv: 3.5,
  },
  {
    name: 'Page F',
    uv: 5.0,
  },
  {
    name: 'Page G',
    uv: 6.5,
  },
];

export default function ChartMarket360Economic() { 
    return (
     <>
     <div className="titleChart">

        <div className='backTitleMarket'>
            <div className='chartBackBtn1' id='chartBackBtn1'>Back</div>
            <div className='backTitleDescBx'>
                <h3>MT: MARKET SENTIMENT</h3>
            </div>
        </div>

        <div className="chartMarketTabs">
          <div className="tabsMarketChart">
              <ul>
                <li className="active">Historical</li>
                <li>Intra-Day</li>
              </ul>
              <div className="marketAnalyze">
                  <p>Analyze</p>
              </div>
          </div>

          <div className="marketChartDetails">
              <ul>
                  <li>MT: MARKET S...</li>
                  <li>4.66</li>
                  <li>01 FEB 03.00</li>
                  <li>3Y</li>
                  <li>H: 4.98</li>
                  <li>L: 1.64</li>
                  <li>O: 3.29</li>
                  <li>PREV. C: 3.16</li>
                  <li>V: 0.00</li>
              </ul>
          </div>

        </div>
     </div>
     <div className="bxChartMarket">
      <ResponsiveContainer width="100%" aspect={2}>
          <AreaChart
              width={400}
              height={200}
              data={data1}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#ef9c18" fill="#a40e10" />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
    );
}

