import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper.scss';
const iconfaCaretUp = <FontAwesomeIcon icon={faCaretUp} />
const iconfaCaretDown = <FontAwesomeIcon icon={faCaretDown} />
SwiperCore.use([Autoplay, Pagination])
function APItopTickers(){
  const swiperRef = useRef(null)
  const [newsResult, setNewsResult] = useState({});
  React.useEffect(() => {
    fetch(global.APItopTickers, global.requestOptions)
      .then(response => response.json())  
      .then(result => setNewsResult(result))
  }, []);
  return(   
    <>
    <div
    >
       <Swiper
        ref={swiperRef}
        loop={true}
        speed={4000} 
        rotate= {30}
        slidesPerView = {1.5}
        width= {200}
        centeredSlides = {true}
        autoplayDisableOnInteraction = {false}
        freeMode= {true}
        autoplay= {{
            delay:0,
            disableOnInteraction: false,
        }}
        spaceBetween={5}
        allowTouchMove={false}
        width={200}       
        breakpoints={{
            300: {
              width: 200,
            },
          }}
      >           
       { newsResult && newsResult.sectorwiseTopTickers && newsResult.sectorwiseTopTickers.map(article =>      
            <SwiperSlide>
              <div className="itemMarketsCarousel">
                <div className="itemMarketsCarouselContent">
                    <div className="itemMarketsCarouselDataTitle">                   
                        <p>{article.exchange}</p>
                        <h5>{article.percentChange >= 0? <span className="colorGreen iconfaCaretUp">{iconfaCaretUp}</span>: <span className="iconfaCaretDown colorred">{iconfaCaretDown}</span>}</h5>
                    </div>
                    <div className="itemMarketsCarouselContentData">                      
                        <p>{article.symbol}</p>
                        <h5>{article.percentChange >= 0? <span className="colorGreen iconfaCaretUp">{parseFloat(article.percentChange).toFixed(2)}%</span>: <span className="iconfaCaretDown colorred">{parseFloat(article.percentChange).toFixed(2)}%</span>}</h5>
                    </div>
                </div>            
            </div>
            </SwiperSlide>     
          )}
           </Swiper>
        </div>
    </>
);
}
export default APItopTickers;