import React, { useState } from 'react';
import $ from "jquery";

const Marketpopupdesc = ()=> {
  const [newsResult, setNewsResult] = useState([]);
  const [marketUpdateResult, setmarketUpdateResult] = useState([]);
  React.useEffect(() => {
    const APIpopupTextAll = global.APIbaseURL+"marketService/popupTextAll";
    
    fetch(APIpopupTextAll, global.requestOptions)
      .then(response => response.text())  
      .then(result => {   
        setNewsResult(result)
      })
      .catch(error => console.log('error', error));  
  }, []); // Pass empty array to only run once on mount.  

setTimeout(() => {
  var all_links = document.getElementById('popupMarket').getElementsByTagName("a");
  $('#popupMarket a').removeAttr('href');
}, 2000);

  return(   
    <>
       <div id="popupMarket">
       {  
        <div dangerouslySetInnerHTML={{ __html: newsResult }} ></div>
        }
        
       </div>
    </>
);
}
export default Marketpopupdesc;


