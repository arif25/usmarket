import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Newscontent from './Newscontent';
import NewsTabs from './NewsTabs';

function News(){
    return (
        <>
            <section className="secmain">
                <div className="container">
                    <div className="mainNavigation">
                        <Navigation />
                    </div>
                    <div className="mainBody">
                      
                    </div>
                </div>
            </section>
        </>
    );
}
export default News;