import React, {useState} from 'react';

function TabsScannerBody() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index);
  }
  return (
    <div className="">
       <section className="portfoliowatchlist bxCalenders">
            <div className="pfWsListTitle bxQuoteTitle bxScannerTitle">
                <ul>
                    <li><p className={toggleState === 1 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>Criteria</p></li>
                    <li><p className={toggleState === 2 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>Correlation</p></li>
                </ul>                
            </div>
            <div className="pfWsListContent">
                <div className="contentbx quoteContentBx">
                    <ul>
                        <li className={toggleState===1 ? "content active-content": "content"}>
                            <p>Criteria</p>
                        </li>
                        <li className={toggleState===2 ? "content active-content": "content"}>
                            <p>Correlation</p>
                        </li>
                    </ul>
                </div>
           </div>
        </section>

    </div>
  );
}

export default TabsScannerBody;
