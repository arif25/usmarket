import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import $ from 'jquery';

function Tabscalender() {
    $(document).ready(function(){  
        $('#CalenderEconomic').click(function(){
            $('#CalenderEconomic').addClass('activeTabs');
            $('#CalenderEarnings').removeClass('activeTabs');
            $('#CalenderDividends').removeClass('activeTabs');
            $('#CalenderIPO').removeClass('activeTabs');
            $('#calenderWeekNextEconomic').removeClass('activeTabs');
            $('#calenderWeekThisEconomic').removeClass('activeTabs');
            $("#ShowCalenderEconomic").show();
            $("#ShowCalenderEarnings").hide();
            $("#ShowCalenderDividends").hide();
            $("#ShowCalenderIPO").hide();
        });        
        $('#CalenderEarnings').click(function(){
            $('#CalenderEarnings').addClass('activeTabs');
            $('#CalenderEconomic').removeClass('activeTabs');
            $('#CalenderDividends').removeClass('activeTabs');
            $('#CalenderIPO').removeClass('activeTabs');
            $('#calenderWeekNextEconomic').removeClass('activeTabs');
            $('#calenderWeekThisEconomic').removeClass('activeTabs');
            $("#ShowCalenderEarnings").show();
            $("#ShowCalenderEconomic").hide();
            $("#ShowCalenderDividends").hide();
            $("#ShowCalenderIPO").hide();

            $("#calenderWeekThisEconomic").attr("id", "newId");


        });
        $('#CalenderDividends').click(function(){
            $('#CalenderDividends').addClass('activeTabs');
            $('#CalenderEconomic').removeClass('activeTabs');
            $('#CalenderEarnings').removeClass('activeTabs');
            $('#CalenderIPO').removeClass('activeTabs');
            $('#calenderWeekNextEconomic').removeClass('activeTabs');
            $('#calenderWeekThisEconomic').removeClass('activeTabs');
            $("#ShowCalenderDividends").show();
            $("#ShowCalenderEarnings").hide();
            $("#ShowCalenderEconomic").hide();
            $("#ShowCalenderIPO").hide();
        });
        $('#CalenderIPO').click(function(){
            $('#CalenderIPO').addClass('activeTabs');
            $('#CalenderEconomic').removeClass('activeTabs');
            $('#CalenderEarnings').removeClass('activeTabs');
            $('#CalenderDividends').removeClass('activeTabs');
            $('#calenderWeekNextEconomic').removeClass('activeTabs');
            $('#calenderWeekThisEconomic').removeClass('activeTabs');
            $("#ShowCalenderIPO").show();
            $("#ShowCalenderDividends").hide();
            $("#ShowCalenderEarnings").hide();
            $("#ShowCalenderEconomic").hide();
        });
        $('#calenderWeekThisEconomic').click(function(){
            $('#ShowEconomicThisWeek').show();
            $('#ShowEconomicNextWeek').hide();
            $('#calenderWeekThisEconomic').addClass('activeTabs');
            $('#calenderWeekNextEconomic').removeClass('activeTabs');
            $('#CalenderIPO').removeClass('activeTabs');
            $('#CalenderEconomic').removeClass('activeTabs');
            $('#CalenderEarnings').removeClass('activeTabs');
            $('#CalenderDividends').removeClass('activeTabs');
        });
        $('#calenderWeekNextEconomic').click(function(){
            $('#ShowEconomicNextWeek').show();
            $('#ShowEconomicThisWeek').hide();
            $('#calenderWeekNextEconomic').addClass('activeTabs');
            $('#calenderWeekThisEconomic').removeClass('activeTabs');
            $('#CalenderIPO').removeClass('activeTabs');
            $('#CalenderEconomic').removeClass('activeTabs');
            $('#CalenderEarnings').removeClass('activeTabs');
            $('#CalenderDividends').removeClass('activeTabs');
        });
    });

  return (
    <>
       <section className="bxCalenders">
            <div className="pfWsListTitle" id='calendertabList'>
                <ul>
                    <li id="CalenderEconomic">Economic</li>
                    <li id="CalenderEarnings" className="activeTabs">Earnings</li>
                    <li id="CalenderDividends">Dividends</li>
                    <li id="CalenderIPO">IPO</li> 
                </ul>                
            </div>
            <div className="pfWsListTitle" id='calendertabWeek'>
                <ul>
                    <li id='calenderWeekThisEconomic'>This Week</li>
                    <li id='calenderWeekNextEconomic'>Next Week+ </li>
                </ul>                
            </div>
            <div className="pfWsListContent">
                <div className="contentbx">
                    <ul> 
                        <li className='ShowCalenderEconomic' id='ShowCalenderEconomic'>
                            <div className="pfWsListContent">
                                <ul>
                                    <li className="pfWsListContentLiRow">
                                        <div className="pfWsListContentHeader">
                                            <ul>
                                                <li>Date Time</li>
                                                <li>Event</li>
                                                <li>Period Survey</li>
                                                <li>Period Actual Revised</li>
                                                <li>IMP</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="pfWsListContentTable calenderContent">

                                    <div id='ShowEconomicThisWeek'>
                                        <ul>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        </ul>
                                    </div>
                                    <div id='ShowEconomicNextWeek'>
                                        <ul>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </li>
                        <li className='ShowCalenderEarnings' id='ShowCalenderEarnings'>
                            <div className="pfWsListContent">
                                <ul>
                                    <li className="pfWsListContentLiRow">
                                        <div className="pfWsListContentHeader">
                                            <ul>
                                                <li>Date</li>
                                                <li>Ticker Name</li>
                                                <li>Estimate Actual</li>
                                                <li>~Forward Pe Analyst Rating</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="pfWsListContentTable calenderContent">
                                    <ul>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='ShowCalenderDividends' id='ShowCalenderDividends'>
                            <div className="pfWsListContent">
                                <ul>
                                    <li className="pfWsListContentLiRow">
                                        <div className="pfWsListContentHeader">
                                            <ul>
                                                <li>EX-DIV DATE</li>
                                                <li>TICKER NAME</li>
                                                <li>EXP DIV ANN. DIV</li>
                                                <li>ANN. REC.</li>
                                                <li>PYMT. DATE</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="pfWsListContentTable calenderContent">
                                    <ul>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='ShowCalenderIPO' id='ShowCalenderIPO'>
                            <div className="pfWsListContent">
                                <ul>
                                    <li className="pfWsListContentLiRow">
                                        <div className="pfWsListContentHeader">
                                            <ul>
                                                <li>EFFECTIVE DATE</li>
                                                <li>ISSUER NAME</li>
                                                <li>PRIMARY EXCHANGE</li>
                                                <li>OFFER SIZE</li>
                                                <li>OFFER PRICE</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="pfWsListContentTable calenderContent">
                                    <ul>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                        <li className="pfWsListContentLiRow">
                                            <ul className="pfWsListContentBody">
                                                <li className="pfWsListContentBlueText">sds</li>
                                                <li>86.29</li>
                                                <li className="pfWsListContentRedText">-11.07</li>
                                                <li className="pfWsListContentGreenText">0.02</li>
                                                <li className="pfWsListContentGreenText">1.18</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
           </div>
        </section>



        





    </>
  );
}

export default Tabscalender;
