import React, { useState } from 'react'; 
import $ from 'jquery';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import EconomyValuationSentimentGraph from './Visualgraphs/EconomyValuationSentimentGraph';
import Market from './Marketquote/Market';
import Quote from './Marketquote/Quote';
import Topstories from './TopstoriesPortfolio/Topstories';
import Footer from '../Footer/Footer';
import MarketSwiper from './Carousel/MarketSwiper';
import TabsWatchliPortfolio from './TabsWatchlistPortfolio/TabsWatchlistPportfolio';
import EVSchart from './Reactbootstrap/EVSchart';

function Dashboard(){ 
    $(document).ready(function(){  
        $('#click_1_Economy').click(function(){ 
            $("#open_2_Economy_dials").show();
            $("#open_1_Economy_chart").hide();
            $("#click_2_Economy").show();
            $("#click_1_Economy").hide();
        });
        $('#click_2_Economy').click(function(){ 
            $("#open_2_Economy_dials").hide();
            $("#open_1_Economy_chart").show();
            $("#click_2_Economy").hide();
            $("#click_1_Economy").show();
        });
        $('#click_1_valuation').click(function(){ 
            $("#open_2_valuation_dials").show();
            $("#open_1_valuation_chart").hide();
            $("#click_2_valuation").show();
            $("#click_1_valuation").hide();
        });
        $('#click_2_valuation').click(function(){ 
            $("#open_2_valuation_dials").hide();
            $("#open_1_valuation_chart").show();
            $("#click_2_valuation").hide();
            $("#click_1_valuation").show();
        });
        
        $('#click_1_sentimental').click(function(){ 
            $("#open_2_sentimental_dials").show();
            $("#open_1_sentimental_chart").hide();
            $("#click_2_sentimental").show();
            $("#click_1_sentimental").hide();
        });
        $('#click_2_sentimental').click(function(){ 
            $("#open_2_sentimental_dials").hide();
            $("#open_1_sentimental_chart").show();
            $("#click_2_sentimental").hide();
            $("#click_1_sentimental").show();
        });
        $('#header').click(function(){ $("#portDropList_watch").hide(); });
        $('#visualgraph').click(function(){ $("#portDropList_watch").hide(); });
        $('#EVSmobileChart').click(function(){ $("#portDropList_watch").hide(); });
        $('#marketquote').click(function(){ $("#portDropList_watch").hide(); });
        $('#sectopstories').click(function(){ $("#portDropList_watch").hide(); });
        $('#portfoliowatchlist').click(function(){ $("#portDropList_watch").hide(); });    
        $('#pfWsListContentHeader').click(function(){ $("#portDropList_watch").hide(); });    
        $('#selectedWatchlist').click(function(){ $("#portDropList_watch").hide(); });    
        
        $('#header').click(function(){ $("#portDropList").hide(); });
        $('#visualgraph').click(function(){ $("#portDropList").hide(); });
        $('#EVSmobileChart').click(function(){ $("#portDropList").hide(); });
        $('#marketquote').click(function(){ $("#portDropList").hide(); });
        $('#sectopstories').click(function(){ $("#portDropList").hide(); });
        $('#idPortListBx').click(function(){ $("#portDropList").hide(); });
        $('#pfWsListContentHeader').click(function(){ $("#portDropList").hide(); });  
        
        $('#portfolioDropdown_watch').click(function(){ $("#portDropList_watch").toggle();});
        $('#portfolioDropdown').click(function(){ $("#portDropList").toggle();});

        $("#navToggle").click(function () {
            $(".navName").toggle();
            $('#mainNavigation').toggleClass('showNav');
            $('#header').toggleClass('headerFullwidth');
            $('#mainBody').toggleClass('mainBodyFullwidth');
            $('#welcomeText').toggle();
        });     
    })
    return <section className="secmain" id="secmain"> 
        <div className="containerbx">
            <div className="mainNavigation" id="mainNavigation">
                <Navigation />
            </div>
            <div className="header" id="header">
                <Header />
            </div>
            <div className="mainBody" id="mainBody">
                <div className="marketcarousel"> 
                    <MarketSwiper />
                </div>
                <div className="visualgraph" id="visualgraph">
                    <div className="EVSdesktopChart" id="EconomyValuationSentimentGraph">
                        <EconomyValuationSentimentGraph />
                    </div> 
                    <div className="EVSmobileChart" id="EVSmobileChart">
                        <EVSchart />
                    </div>
                </div>
                <div className="topStriesMarketQuote" id="topStriesMarketQuote">
                    <div className="Storiesmarketquote" id="Storiesmarketquote">
                        <Topstories />
                    </div>
                    <div className="marketquote" id="marketquote">
                        <div className="bxMarketquote">
                            <Market />  
                            <Quote /> 
                        </div>
                        <div className="bxTopstories">
                            <TabsWatchliPortfolio />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    </section>
}

export default Dashboard