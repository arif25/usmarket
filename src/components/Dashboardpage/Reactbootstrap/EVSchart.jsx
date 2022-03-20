import React, {useState} from 'react';
import APIeconomysChart from '../APIuseEffect/APIeconomy/APIeconomysChart';
import SpeedometerEconomy from '../Chart/Speedometer/SpeedometerEconomy';
import APIvaluationsChart from '../APIuseEffect/APIvaluation/APIvaluationsChart';
import SpeedometerValuation from '../Chart/Speedometer/SpeedometerValuation';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
const iconfaExchangeAlt = <FontAwesomeIcon icon={faExchangeAlt} />

function EVSchart(){
    let areaChartEconomy = [];
    let speedometerEconomy = [];
    let areaChartValuation = [];
    let speedometerValuation = [];    
    let areaChartSentiment = [];
    let speedometerSentiment = [];     
    const [nowEconomy, setChartEconomy] = useState(1);
    const changeChartEconomy = () =>{
        var val = nowEconomy; 
        if(val===1){
            setChartEconomy(2);
        }
        else{
            setChartEconomy(1) 
        }
    }
    const [nowValuation, setChartValuation] = useState(1);
    const changeChartValuation = () =>{
        var val = nowValuation; 
        if(val===1){
            setChartValuation(2);
        }
        else{
            setChartValuation(1) 
        }
    }
    const [nowSentiment, setChartSentiment] = useState(1);
    const changeChartSentiment = () =>{
        var val = nowSentiment; 
        if(val===1){
            setChartSentiment(2);
        }
        else{
            setChartSentiment(1) 
        }
    } 
    if(nowEconomy === 1){
        areaChartEconomy.push('displayNone')
        speedometerEconomy.push('displayBlock')
    }
    if(nowEconomy === 2){
        areaChartEconomy.push('displayBlock')
        speedometerEconomy.push('displayNone')
    }
    if(nowValuation === 1){
        areaChartValuation.push('displayNone')
        speedometerValuation.push('displayBlock')
    }
    if(nowValuation === 2){
        areaChartValuation.push('displayBlock')
        speedometerValuation.push('displayNone')
    }

    if(nowSentiment === 1){
        areaChartSentiment.push('displayNone')
        speedometerSentiment.push('displayBlock')
    }
    if(nowSentiment === 2){
        areaChartSentiment.push('displayBlock')
        speedometerSentiment.push('displayNone')
    } 
    return (
        <section className="EVSchart">
        <Carousel interval={null}>
            <Carousel.Item>               
                <div className="itemgraph">
                    <div className="graphTitle">Economy</div>
                    <div className="graphContent">
                        <div className="gameChanger">
                            <p onClick={changeChartEconomy}>{iconfaExchangeAlt}</p>  
                        </div>
                        <div className={areaChartEconomy} id="areaChartEconomy">
                            <div id="areaChartEconomy">
                                <APIeconomysChart /> 
                            </div>
                        </div>
                        <div className={speedometerEconomy} id="speedometerEconomy">                    
                            <div id="speedometerEconomy">                    
                                <SpeedometerEconomy />
                            </div>                        
                        </div>                        
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>               
                <div className="itemgraph">
                    <div className="graphTitle">Valuation</div>
                    <div className="graphContent"> 
                        <div className="gameChanger">
                            <p onClick={changeChartValuation}>{iconfaExchangeAlt}</p>  
                        </div>
                        <div className={areaChartValuation} id="areaChartValuation"> 
                           <APIvaluationsChart />
                        </div>
                        <div className={speedometerValuation} id="speedometerValuation">                    
                            <SpeedometerValuation />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>               
                <div className="itemgraph">
                    <div className="graphTitle">Economy</div>
                    <div className="graphContent">
                        <div className="gameChanger">
                            <p onClick={changeChartEconomy}>{iconfaExchangeAlt}</p>  
                        </div>
                        <div className={areaChartEconomy} id="areaChartEconomy">
                            <div id="areaChartEconomy">
                                <APIeconomysChart /> 
                            </div>
                        </div>
                        <div className={speedometerEconomy} id="speedometerEconomy">                    
                            <div id="speedometerEconomy">                    
                                <SpeedometerEconomy />
                            </div>                        
                        </div>                        
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}
export default EVSchart;