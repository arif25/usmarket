import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import $ from 'jquery';
import Quotebody_new from './Quotebody_new';
import Quotebody_newOptions from './Quotebody_newOptions';
import Quotebody_portfolios from './Quotebody_portfolios';
import Quotebody_zIndex from './Quotebody_zIndex';
import MarketSwiper from '../../Dashboardpage/Carousel/MarketSwiper';

$(document).ready(function(){    
    $('.selectDropQuote').change(function(){ 
       var selectValue = $(this).val();
       if(selectValue === "ticker"){
          $("#Quotebody_Ticker").show();
          $("#Quotebody_options").hide();
          $("#Quotebody_portfolios").hide();
          $("#Quotebody_zIndex").hide();
       }        
       else if(selectValue === "options"){
        $("#Quotebody_Ticker").hide();
        $("#Quotebody_options").show();
        $("#Quotebody_portfolios").hide();
        $("#Quotebody_zIndex").hide();
       }    
       else if(selectValue === "portfolios"){
        $("#Quotebody_Ticker").hide();
        $("#Quotebody_options").hide();
        $("#Quotebody_portfolios").show();
        $("#Quotebody_zIndex").hide();
       }  
       else if(selectValue === "zindex"){
        $("#Quotebody_Ticker").hide();
        $("#Quotebody_options").hide();
        $("#Quotebody_portfolios").hide();
        $("#Quotebody_zIndex").show();
       }
   });   
   $("#btnSupportResistance").click(function(){
       $("#showSupportResistance").show();
   }); 
})

function TabsQuote(){
    return (
        <>
            <section className="secmain">
                <div className="">
                    <div className="mainNavigation">
                        <Navigation />
                    </div>
                    <div className="mainBody">
                        <div className="header">
                            <Header />
                        </div>
                        
                        <div className="marketcarousel"> 
                            <MarketSwiper />
                        </div>
                        <div className="innerPageSection">                            
                            <section className="Quotebody_listSelected" id="Quotebody_Ticker">
                                <Quotebody_new />
                            </section>
                            <section className="Quotebody_listSelected" id="Quotebody_options">
                                <Quotebody_newOptions />
                            </section>
                            <section className="Quotebody_listSelected" id="Quotebody_portfolios">
                                <Quotebody_portfolios />
                            </section>
                            <section className="Quotebody_listSelected" id="Quotebody_zIndex">
                                <Quotebody_zIndex />
                            </section>
                        </div>
                        <div className="footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TabsQuote;