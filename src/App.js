import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboardpage/Dashboard';
import 'swiper/swiper.scss';
import News from './components/Innerpages/News/News';
import Markets from './components/Innerpages/Markets/Markets';
import Calenders from './components/Innerpages/Calenders/Calenders';
import Scanner from './components/Innerpages/Scanner/Scanner';
import Watchlist from './components/Dashboardpage/Watchlist/Watchlist';
import Research from './components/Innerpages/Research/Research';
import Portfolio from './components/Innerpages/Portfolio/Portfolio';
import Trade from './components/Innerpages/Trade/Trade';
import Backtester from './components/Innerpages/Backtester/Backtester';
import Optimizer from './components/Innerpages/Optimizer/Optimizer';
import Simulator from './components/Innerpages/Simulator/Simulator';
import Predictions from './components/Innerpages/Predictions/Predictions';
import Myfinance from './components/Innerpages/Myfinance/Myfinance';
import Myaccount from './components/Innerpages/Myaccount/Myaccount';
import Zeseniaacademy from './components/Innerpages/Zeseniaacademy/Zeseniaacademy';
import Help from './components/Innerpages/Help/Help';
import ScheduleAcall from './components/Innerpages/ScheduleAcall/ScheduleAcall';
import TermsCondition from './components/Innerpages/TermsCondition/TermsCondition';
import TabsQuote from './components/Innerpages/Quote/Quote';
import Welcomepopup from './components/Dashboardpage/Autopopups/Welcomepopup';
import Login from './components/Loginregister/Login';
import Register from './components/Loginregister/Register';
import Globalvariables from './GlobalVariables';
// import SpeedometerEconomy from './components/Dashboardpage/Chart/Speedometer/SpeedometerEconomy'; 
// import SpeedometerValuation from './components/Dashboardpage/Chart/Speedometer/SpeedometerValuation';
// import PopupSpeedometerEconomy from './components/Dashboardpage/Chart/Speedometer/PopupSpeedometerEconomy';
// import TabsWatchliPortfolio4 from './components/Dashboardpage/TabsWatchlistPortfolio/TabsWatchlistPportfolio'; 
import './components/Assets/Styles/style.css';
function App() {  
  return (
    <>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/news' component={News} />
      <Route exact path='/markets' component={Markets} />
      <Route exact path='/calenders' component={Calenders} />
      <Route exact path='/quote' component={TabsQuote} />
      <Route exact path='/scanner' component={Scanner} />
      <Route exact path='/research' component={Research} />
      <Route exact path='/watchlist' component={Watchlist} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/trade' component={Trade} />
      <Route exact path='/backtester' component={Backtester} />
      <Route exect path='/optimizer' component={Optimizer} />
      <Route exact path='/simulator' component={Simulator} />
      <Route exact path='/predictions' component={Predictions} />
      <Route exect path='/myfinance' component={Myfinance} />
      <Route exact path='/myaccount' component={Myaccount} />
      <Route exact path='/zeseniaacademy' component={Zeseniaacademy} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/scheduleacall' component={ScheduleAcall} />
      <Route exact path='/termscondition' component={TermsCondition} />
      <Route exact path='/welcomepopup' component={Welcomepopup} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
    <div className="displaynone">
    </div> 
    </>
  );
}

export default App;
