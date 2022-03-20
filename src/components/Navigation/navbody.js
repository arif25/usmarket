import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faNewspaper, faBuilding, faCalendar, faList, faQrcode, faLightbulb, faFile, faCalendarCheck, faCircle, faAdjust, faPodcast, faBolt, faCube, faMicrophone, faLeaf, faUser, faDatabase, faQuestionCircle, faPhone, faMobile, faPoll, faSignOutAlt, faFan, faBars } from '@fortawesome/free-solid-svg-icons';
const iconfaColumns = <FontAwesomeIcon icon={faColumns} />
const iconfaNewspaper = <FontAwesomeIcon icon={faNewspaper} />
const iconfaBuilding = <FontAwesomeIcon icon={faBuilding} />
const iconfacalendar = <FontAwesomeIcon icon={faCalendar} />
const iconfaList = <FontAwesomeIcon icon={faList} />
const iconfaQrcode = <FontAwesomeIcon icon={faQrcode} />
const iconfaLightbulb = <FontAwesomeIcon icon={faLightbulb} />
const iconfaFile = <FontAwesomeIcon icon={faFile} />
const iconfaCalendarCheck = <FontAwesomeIcon icon={faCalendarCheck} />
const iconfaCircle = <FontAwesomeIcon icon={faCircle} />
const iconfaAdjust = <FontAwesomeIcon icon={faAdjust} />
const iconfaPodcast = <FontAwesomeIcon icon={faPodcast} />
const iconfaBolt = <FontAwesomeIcon icon={faBolt} />
const iconfaCube = <FontAwesomeIcon icon={faCube} />
const iconfaMicrophone = <FontAwesomeIcon icon={faMicrophone} />
const iconfaLeaf = <FontAwesomeIcon icon={faLeaf} />
const iconfaUser = <FontAwesomeIcon icon={faUser} />
const iconfaDatabase = <FontAwesomeIcon icon={faDatabase} />
const iconfaQuestioncircle = <FontAwesomeIcon icon={faQuestionCircle} />
const iconfaWhatsapp = <FontAwesomeIcon icon={faPhone} />
const iconfaCall = <FontAwesomeIcon icon={faMobile} />
const iconfaPrivacyPolicy = <FontAwesomeIcon icon={faPoll} />
const iconfaFan = <FontAwesomeIcon icon={faFan} />
const iconfaBars = <FontAwesomeIcon icon={faBars} />

$(document).ready(function(){  
    $('#navitem ul li').on('click', function(){
        // $('#menu li a.current').removeClass('current');
        $(this).addClass('current');
    });
})

function Navbody(){
    return <section className="navbody scrollbar" id="style-3">
    <div className="force-overflow">
        <div className="navToggle" id="navToggle">
            <span className="navfaIcon">{ iconfaBars }</span>
            <span className="welcomeText" id="welcomeText">Welcome user</span>
        </div>
        <div className="navitem" id="navitem">
            <ul>
                <li>
                    <Link to="/" className="navLinks navNews"><span className="navfaIcon">{iconfaColumns}</span> 
                    <span className="navName">Dashboard</span></Link>
                </li>
                <li>
                    <Link to="/news" className="navLinks navNews"><span className="navfaIcon">{iconfaNewspaper}</span> 
                    <span className="navName">News</span></Link>
                </li>
                <li>
                    <Link to="/markets" className="navLinks navMarkets"><span className="navfaIcon">{iconfaBuilding}</span> 
                    <span className="navName">Markets</span></Link>
                </li>
                <li>
                    <Link to="/calenders" className="navLinks navCalender"><span className="navfaIcon">{iconfacalendar}</span> <span className="navName">Calenders</span></Link>
                </li>
                <li>
                    <Link to="/quote" className="navLinks navCalender"><span className="navfaIcon">{iconfaList}</span> 
                    <span className="navName">Quote</span></Link>
                </li>
                <li>
                    <Link to="/scanner" className="navLinks navScanner"><span className="navfaIcon">{iconfaQrcode}</span> 
                    <span className="navName">Scanner</span></Link>
                </li>
                <li>
                    <Link to="/research" className="navLinks navScanner"><span className="navfaIcon">{iconfaLightbulb}</span> <span className="navName">Research</span></Link>
                </li>
                <li>
                    <Link to="/research" className="navLinks navScanner"><span className="navfaIcon">{iconfaFile}</span> 
                    <span className="navName">Reports</span></Link>
                </li>
                <li>
                    <Link to="/watchlist" className="navLinks navWatchlist"><span className="navfaIcon">{iconfaCalendarCheck}</span> <span className="navName">Watchlist</span></Link>
                </li>
                <li>
                    <Link to="/portfolio" className="navLinks navPortfolio"><span className="navfaIcon">{iconfaCircle}</span> <span className="navName">Portfolio</span></Link>
                </li>
                <li>
                    <Link to="/trade" className="navLinks navTrade"><span className="navfaIcon">{iconfaAdjust}</span> 
                    <span className="navName">Trade</span></Link>
                </li>
                <li>
                    <Link to="/backtester" className="navLinks navBacktester"><span className="navfaIcon">{iconfaPodcast}</span> <span className="navName">Backtester</span></Link> 
                </li>
                <li>
                    <Link to="/optimizer" className="navLinks navOptimizer"><span className="navfaIcon">{iconfaBolt}</span> 
                    <span className="navName">Optomizer</span></Link> 
                </li>
                <li>
                    <Link to="/simulator" className="navLinks navSimulator"><span className="navfaIcon">{iconfaCube}</span> 
                    <span className="navName">Simulator</span> </Link>
                </li>
                <li>
                    <Link to="/predictions" className="navLinks navPredictions"><span className="navfaIcon">{iconfaMicrophone}</span> 
                    <span className="navName">Predictions</span></Link> 
                </li>
                <li>
                    <Link to="/myfinance" className="navLinks navMyfinance"><span className="navfaIcon">{iconfaLeaf}</span> 
                    <span className="navName">Myfinance</span></Link>
                </li>
                <li>
                    <Link to="/myaccount" className="navLinks navMyAccount"><span className="navfaIcon">{iconfaUser}</span> 
                    <span>My Account</span></Link>
                </li>
                <li>
                    <Link to="/zeseniaacademy" className="navLinks navZseniaAcademy"><span className="navfaIcon">{iconfaDatabase}</span> <span className="navName">Zesenia Academy</span></Link>
                </li>
                <li>
                    <Link to="/help" className="navLinks navhelp"><span className="navfaIcon">{iconfaQuestioncircle}</span> 
                    <span className="navName">Help</span></Link>
                </li>
                <li>
                    <Link to="/scheduleacall" className="navLinks navScheduleAcall"><span className="navfaIcon">{iconfaWhatsapp}</span> <span className="navName">Whatsapp us</span></Link>
                </li>
                <li>
                    <Link to="/scheduleacall" className="navLinks navScheduleAcall"><span className="navfaIcon">{iconfaCall}</span> <span className="navName">Schedule a call</span></Link>
                </li>
                <li>
                    <Link to="/scheduleacall" className="navLinks navPrivacyPolicy"><span className="navfaIcon">{iconfaPrivacyPolicy}</span> <span className="navName">Privacy Policy</span></Link>
                </li>
                <li>
                    <Link to="/termscondition" className="navLinks navTermsCondition"><span className="navfaIcon">{iconfaFan}</span> <span className="navName">Terms & Conditions </span></Link>
                </li>
            </ul>
        </div>
        </div>

    </section>
}
export default Navbody;