import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper.scss';
const iconfaCaretUp = <FontAwesomeIcon icon={faCaretUp} />
const iconfaCaretDown = <FontAwesomeIcon icon={faCaretDown} />
function APImarkets(){
  const [newsResult, setNewsResult] = useState({});
  React.useEffect(() => {
    fetch(global.marketsAPI, global.requestOptions)
      .then(response => response.json())  
      .then(result => setNewsResult(result))
  }, []);
  global.newResult_marketsAPI = newsResult;
  return(   
    <>
       { global.newResult_marketsAPI && global.newResult_marketsAPI.futures && global.newResult_marketsAPI.futures.map(article =>      
            <div>
            <li >
            <div className="marketMenuLeft">
                <div className="marketMenuContent">
                    <p>{article.name}</p>   
                    <h5>{article.percent === 0? <span className="iconfaCaretDown colorgray">{iconfaCaretUp}</span> : article.percent >= 0? <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>: <span className="iconfaCaretDown colorred">{iconfaCaretDown}</span>}</h5>
                </div> 
            </div>
            <div className="marketMenuRight">
                <p>Futures</p>
                <h5>{article.percent === 0? <span className="iconfaCaretDown colorgray">{parseFloat(article.percent).toFixed(4)}<span>%</span></span> : article.percent >= 0? <span className="colorGreen iconfaCaretUp">{parseFloat(article.percent).toFixed(4)}<span>%</span></span>: <span className="iconfaCaretDown colorred">{parseFloat(article.percent).toFixed(4)}<span>%</span></span>}</h5>
            </div>
        </li>
        </div>
          )
          }
    </>
);
}
export default APImarkets;