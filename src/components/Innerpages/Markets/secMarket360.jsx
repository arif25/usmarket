import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import SpeedometerMarket360 from './SpeedometerMarket360';
import SpeedometerMarket360Treasury from './SpeedometerMarket360Treasury(SHY)';
import SpeedometerMarket360VIXY from './SpeedometerMarket360VIXY';
import SpeedometerMarket360VIIX from './SpeedometerMarket360(VIIX)';
import SpeedometerMarket360VIX from './SpeedometerMarket360(VIX)';
import SpeedometerMarket360101YR from './SpeedometerMarket360(10-1YR)';
import SpeedometerMarket360IgCreditSpread from './SpeedometerMarket360IgCreditSpread';
import ChartMarket360Sentiment from './ChartMarket360Sentiment';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const iconfaCaretUp = <FontAwesomeIcon icon={faCaretUp} />
const iconfaCaretDown = <FontAwesomeIcon icon={faCaretDown} />
const iconfaTimes = <FontAwesomeIcon icon={faTimes} />
const iconExclamationCircle = <FontAwesomeIcon icon={faExclamationCircle} />


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
    <section className="secbxEquity360Tabs bxEquityDefPopup" id="DefArtiMarket360">
        <div className="bgBxEquityDefPopup">
            &nbsp;
        </div>
        <article className="artiMarket360">
          <div className="titleMarket360">
              <h4>Definitions</h4>
              <div class="marketsBtns" id="CloseSecMarketsBtns">
                  <div className="closeTitleMarket360">{iconfaTimes}</div>
              </div>
          </div>
          <p><span>Market sentiment index:</span> market sentiment index predicts the short-term market movement for the following two days. a higher rating represents a higher probability of positive market return white a lower rating represents a higher probability of negative markt return. for instance, a market sentiment rating above 2.5 predicts that the market will exhibit a cumulative positive return in the following two days and vice versa. in the last 10 years, this rating's predictions were correct about 68% of the time. this rating dosen't predict the magnitude of the return, rather it predicts only the direction of the return.</p>
          <div className="dosenotShow">
            <input type="radio" />
            <p>DON'T SHOW ME AGAIN</p>
          </div>
        </article>
    </section>

    <section className="secEquity360"> 


      <div className='backTitleMarket'>
            <div className='chartBackBtn1' id='chartBack3601'>Back</div>
            <div className='backTitleDescBx'>
                <h3>MARKET 360</h3>
            </div>
      </div>


      <div className="SpeedometerMarket360">
        <div id="showChart1">{iconExclamationCircle}</div>
        <div id="showdefination">{iconExclamationCircle}</div>
        <div id="marketChart1">
            <ChartMarket360Sentiment />
        </div> 
        <div id="SpeedometerChart1">
          <SpeedometerMarket360 />
        </div>
      </div>
      <div className="speedometerMarketList" id="speedometerMarketList">

        <div id="marketChart2">
          <ChartMarket360Sentiment />
        </div>
        <div id="marketChart3">
          <ChartMarket360Sentiment />
        </div>
        <div id="marketChart4">
          <ChartMarket360Sentiment />
        </div>
        <div id="marketChart5">
          <ChartMarket360Sentiment />
        </div>
        <div id="marketChart6">
          <ChartMarket360Sentiment />
        </div>
        <div id="marketChart7">
          <ChartMarket360Sentiment />
        </div>

        <ul>
          <li>
            <div id="SpeedometerChart2">
              <div id="showChart2">{iconExclamationCircle}</div>
              <SpeedometerMarket360Treasury />
            </div>
          </li>
          <li>
            <div id="SpeedometerChart3">
              <div id="showChart3">{iconExclamationCircle}</div>
              <SpeedometerMarket360VIXY />
            </div>
          </li>
          <li>
            <div id="SpeedometerChart4">
              <div id="showChart4">{iconExclamationCircle}</div>
              <SpeedometerMarket360VIIX />
            </div>
          </li>
          <li>
            <div id="SpeedometerChart5">
              <div id="showChart5">{iconExclamationCircle}</div>
              <SpeedometerMarket360VIX />
            </div>
          </li>
          <li>
            <div id="SpeedometerChart6">
              <div id="showChart6">{iconExclamationCircle}</div>
              <SpeedometerMarket360101YR />
            </div>
          </li>
          <li>
            <div id="SpeedometerChart7">
              <div id="showChart7">{iconExclamationCircle}</div>
              <SpeedometerMarket360IgCreditSpread />
            </div>
          </li>
        </ul>
      </div>
    </section>

    </>
    );
}
export default Equity360; 
