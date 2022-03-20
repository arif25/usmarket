import React from "react";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import $ from 'jquery';
// import Apinews from '../APIuseEffect/Apinews';
import Apinews from "../../Dashboardpage/APIuseEffect/Apinews";

function Newscontent(){
    return(
        <section className="secnewsTabs">
            <div >
                <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                    <Tab label="Top Stories">Top Stories</Tab>
                    <Tab label="Topics">Topics</Tab>
                    <Tab label="Saved">Saved</Tab>
                </Tabs>    
            </div>

            <section className="secTopstories"> 
                <Apinews />
            </section>

        </section>
    );
}
export default Newscontent;