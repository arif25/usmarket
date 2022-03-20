import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

$(document).ready(function(){
  $("#chart_Historical").click(function(){
      $("#secHistorical").show();
      $("#secHistorical").removeClass('active');
      $("#secIntraDay").hide();
      $("#chart_Historical").addClass('active');
      $("#chart_Intra_Day").removeClass('active');
  });
  $("#chart_Intra_Day").click(function(){
      $("#secHistorical").hide();
      $("#secIntraDay").show();
      $("#chart_Intra_Day").addClass('active');
      $("#chart_Historical").removeClass('active');
  });
  $("#chart_Date_Range").click(function(){
  });
  $("#chart_Compare").click(function(){
  });
  $("#chart_Studies").click(function(){
  });
})

function ChartQuotePage(){
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]

    return (
        <section className="secChartQuote">

          <div className="quoteChartTabs">
              <div className="quoteChartTabs_left">
                <ul>
                  <li className="active" id="chart_Historical">Historical</li>
                  <li id="chart_Intra_Day">Intra-Day</li>
                </ul>
              </div>
              <div className="quoteChartTabs_right">
                <ul>
                  <li id="chart_Date_Range">Date Range</li>
                  <li id="chart_Compare">Compare</li>
                  <li id="chart_Studies">Studies</li>
                  <li id="chart_Calender">
                    <select>
                      <option>Resistance</option>
                      <option>Volatility Spike</option>
                      <option>Treasury Inverse</option>
                      <option>Support</option>
                      <option>S & P Correction</option>
                      <option>None</option>
                    </select>
                  </li>
                </ul>
              </div>
          </div>

          <section className="secHistorical" id="secHistorical">
                <ResponsiveContainer height={300} width='100%'>
                    <AreaChart data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#dd0a03" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#dd0a03" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        {/* <XAxis dataKey="name" /> */}
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="pv" stroke="#f19435" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </section>

            <section className="secIntraDay" id="secIntraDay">
                  <div className="intradayValue">
                    <ul>
                      <li>Lorem ipsum: 160.79</li>
                      <li>Lorem ipsum: 0.53 (0.33%)</li>
                      <li>BID: 158.40</li>
                      <li>ASK: 158.63</li>
                    </ul>
                  </div>
                  <div className="intradayContentTable">
                    <table>
                      <tr>
                        <td>BID SIZE</td>
                        <td>100</td>
                        <td>ASK SIZE</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>LAST SIZE</td>
                        <td>200</td>
                        <td>OPEN</td>
                        <td>160.75</td>
                      </tr>
                      <tr>
                        <td>VOLUME</td>
                        <td>69.73M</td>
                        <td>CLOSE</td>
                        <td>161.94</td>
                      </tr>
                    </table>
                  </div>

                  <div className="intradayGraph">
                      <ResponsiveContainer height={300} width='100%'>
                          <AreaChart data={data}
                              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                              <defs>
                                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#dd0a03" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#dd0a03" stopOpacity={0}/>
                                  </linearGradient>
                              </defs>
                              {/* <XAxis dataKey="name" /> */}
                              <YAxis />
                              <CartesianGrid strokeDasharray="3 3" />
                              <Tooltip />
                              <Area type="monotone" dataKey="pv" stroke="#f19435" fillOpacity={1} fill="url(#colorPv)" />
                          </AreaChart>
                      </ResponsiveContainer>
                  </div>
                  <div className="tabsIntraday">
                    <ul>
                      <li>QUOTE</li>
                      <li>POSITIONS</li>
                      <li>ORDERS</li>
                      <li>ACTIVITY</li>
                      <li>ACCOUNTS</li>
                    </ul>
                  </div>

            </section>

        </section>
    )
}
export default ChartQuotePage;