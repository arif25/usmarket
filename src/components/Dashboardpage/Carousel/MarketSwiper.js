import React, { useRef } from 'react'
import APItopTickers from '../APIuseEffect/APItoptickers';
function MarketSwiper() {
  return (
    <section className="secmarketscarousel">    
      <div className="APItopTickersFixed">
        <select>
          <option>Sectors</option>
          <option>Label</option>
          <option>Watchlist</option>
          <option>Indicies</option>
        </select>
      </div>   
      <div className="APItopTickersCarousel">
        <APItopTickers />
      </div>
    </section>
  );
}
export default MarketSwiper;
