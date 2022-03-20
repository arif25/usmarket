
import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const iconfaCaretUp = <FontAwesomeIcon icon={faCaretUp} />
const iconfaCaretDown = <FontAwesomeIcon icon={faCaretDown} />

const data = [
  {
    "name": "MARKET",
    "uv": 1.0
  },
  {
    "name": "REAL-ESTATE",
    "uv": 1.5
  },
  {
    "name": "ENERGY",
    "uv": 2.0
  },
  {
    "name": "HEALTHCARE",
    "uv": 2.5
  },
  {
    "name": "UTILITIES",
    "uv": 3.0
  },
  {
    "name": "COMMUNICATION-SERVICES",
    "uv": 3.5
  },
  {
    "name": "CONSUMER-DEFENSIVE",
    "uv": 4.0
  },
  {
    "name": "TECHNOLOGY",
    "uv": 4.5
  },
  {
    "name": "INDUSTRIALS",
    "uv": 5
  }
]

function Equity360(){
  return (
    <>
    <section className="secbxEquity360">
      <div className="bxEquity360">
        <div className="titleBxEquity360">
          <h5>ANALYST RATINGS</h5>
          <h6>5=HIGHEST, 1=LOWEST</h6>
        </div>
        <BarChart width={730} height={350} data={data} layout="vertical"> 
            <CartesianGrid />
            <XAxis width={400} stroke="#fff"/>
            <YAxis dataKey="name" type="category" fill="#fcff00" stroke="#fffd00" width={400}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#fcff00" barSize={200} />
        </BarChart>
      </div>
    </section>

    <section className="secbxEquity360Tabs">
    <Tabs>
      <TabList>
        <Tab>Financial</Tab>
        <Tab>Valuation</Tab>
        <Tab>Returns</Tab>
      </TabList>

      <TabPanel>
        <section className="secMarketsPanel">
          <div className="marketPanelUl">
            <ul>
              <li>REVENUE GROWTH 1 YR</li>
              <li>REVENUE GROWTH 3 YR</li>
              <li>NET INCOME GROWTH 1YR</li>
              <li>NET INCOME GROWTH 3YR</li>
            </ul>
          </div>
          <div className="marketPanelTable">
            <table>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorRed">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>14.75</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                  </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>14.75</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorRed">
                  <h5>9.38</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorRed">
                  <h5>9.38v</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                  </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>14.75</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>14.75</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                 </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                  <h5>113.47</h5>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>113.47</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>   
                <td className="colorRed">
                  <h5>14.75</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section className="secMarketsPanel">
          <div className="marketPanelUl">
            <ul>
              <li>FORWARD PRICE TO EARNINGS</li>
              <li>PRICE TO EARNINGS</li>
              <li>PRICE TO BOOK</li>
              <li>PRICE TO SALES</li>
            </ul>
          </div>
          <div className="marketPanelTable">
            <table>
              <tr>
                <td>FINANCIAL SERVICES</td>                
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>                
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>                
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td> 
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>               
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section className="secMarketsPanel">
          <div className="marketPanelUl">
            <ul>
              <li>RETURN/RISK 1YR</li>
              <li>RETURN/RISK 3 YR</li>
              <li>RETURN/RISK 5 YR</li>
            </ul>
          </div>
          <div className="marketPanelTable">
            <table>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>FINANCIAL SERVICES</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>BASIC MATERIALS</td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
              </tr>
              <tr>
                <td>CONSUMER CYCLICAL</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>INDUSTRIALS</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorBlue">
                  <h5>-0.23</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
              <tr>
                <td>TECHNOLOGY</td>
                <td className="colorBlue">
                  <h5>9.38</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorRed">
                  <h5>-0.23</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
                <td className="colorRed">
                  <h5>113.47</h5>
                  <span className="colorRed iconfaCaretUp">{iconfaCaretDown}</span>
                </td>
                <td className="colorBlue">
                  <h5>14.75</h5>
                  <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </TabPanel>
    </Tabs>
    </section>
    </>
    );
}
export default Equity360; 
