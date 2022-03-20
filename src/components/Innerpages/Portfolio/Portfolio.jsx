import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Portfolio(){
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
                            <h1>Portfolio</h1>
                            <p>Coming Soon...</p>
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
export default Portfolio;