import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Tabscalender from './Tabscalender';

function Calenders(){
    return (
        <>
            <section className="secmain">
                <div className="container">
                    <div className="mainNavigation">
                        <Navigation />
                    </div>
                    <div className="mainBody">
                        <div className="header">
                            <Header />
                        </div>
                        <div className="innerPageSection">
                            <Tabscalender />
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Calenders;