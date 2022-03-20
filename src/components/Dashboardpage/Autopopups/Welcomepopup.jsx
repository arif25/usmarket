import React, {useState, useRef} from 'react';
import IdleTimer from 'react-idle-timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const iconfaColumns = <FontAwesomeIcon icon={faTimes} />
function Popupwelcome(){
    const [show, setShow]=useState(false);
    const idleTimesRef = useRef(null)     
    const onIdle = () => {
        setShow(!show)
    }
    return(
        <>
            {
                show?
                    <div className="bxWelcomePopup">
                        <div className="welcomePopup">
                            <div className="popupClose" onClick={()=>setShow(!show)}>
                                {iconfaColumns}
                            </div>
                            <div className="trial_1_month">
                                <a href="">1 Month Free Trial</a>
                            </div>
                            <div className="bxContentWelcome">
                                <h3>Welcome to Zsenia!</h3>
                                <h4><a href="">Be your own robo-advisor</a></h4>
                                <h5>Enjoy FREE & Unlimited Access</h5>
                                <p>Simulated Live Trading and P&L <span>new</span></p>
                                <p>Live Streaming Watchlist <span>new</span></p>
                                <p>Live Streaming Watchlist <span>new</span></p>
                                <p>Insider Buying <span>new</span></p>
                                <h6>Stock & ETF Research Economic Indicators Market Event Analyzer Premium News Track Predictions Financial Planning ZSENIA Academy</h6>
                                <div className="testDrive">
                                    <p>Test-Drive all Professional Portfolio Management Tools with simulated Live Portfolio</p>
                                </div>
                                <div className="tabsAnalyzer">
                                    <ul>
                                        <li><a href="">Analyzer</a></li>
                                        <li><a href="">Optimizer</a></li>
                                        <li><a href="">Backtester</a></li>
                                        <li><a href="">Simulator</a></li>
                                    </ul>
                                </div>
                                <div className="whatsappanytime">Whatsapp us anytime</div>
                            </div>
                        </div>
                    </div>
                :null
            }
        </>
    );
}
export default Popupwelcome;

