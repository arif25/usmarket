import React, { useState } from 'react';

const LiveStream = ()=> {
  const STREAM_URL = "wss://webapp20211006.zsenia.com/websock";
  const [streamStatus, setStreamStatus] = useState("CLOSED");
  const VolFormatter = new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 2, notation: "compact" , compactDisplay: "short" });

  var wsStream;
  var streamJson;
  var subscriptions = [];
  var retryMillies = 0;

  React.useEffect(() => {
    if(streamStatus === "CLOSED") {
      setTimeout(initWS, retryMillies);
    }

    function initWS() {
      wsStream = new WebSocket(STREAM_URL);

      wsStream.onopen = () => {
        retryMillies = 0;
        setStreamStatus("LIVE");
        setInterval(updateSubs, 5000);
      };
      wsStream.onmessage = async (event) => {
        streamJson = JSON.parse(event.data);
        if(streamJson.status != undefined && streamJson.status === "closed") {
          retryMillies = streamJson.retryMillies;
          wsStream.close();
          return;
        }
        var thisSymbol = streamJson.Symbol;
        var thisPrice = streamJson.Price;

        var marks = document.querySelectorAll('.liveStreamMark'+thisSymbol);
        for(var i=0; i< marks.length; i++) {
          var lastPrice = marks[i].innerHTML;
          var thisClass = (thisPrice > lastPrice) ? "pfWsListContentGreenText" : ((thisPrice < lastPrice) ? "pfWsListContentRedText" : "colorgray");
          marks[i].innerHTML = decimalFormater(thisPrice, 2);
          marks[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
          marks[i].classList.add(thisClass);
        }
        var changePcts = document.querySelectorAll('.liveStreamChange'+thisSymbol);
        for(var i=0; i< changePcts.length; i++) {
          var thisChange = streamJson.ChangePc;
          var thisClass = (thisChange > 0) ? "pfWsListContentGreenText" : ((thisChange < 0) ? "pfWsListContentRedText" : "colorgray");
          
          changePcts[i].innerHTML = decimalFormater(thisChange, 4);
          changePcts[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
          changePcts[i].classList.add(thisClass);
        }
        var bids = document.querySelectorAll('.liveStreamBid'+thisSymbol);
        for(var i=0; i< bids.length; i++) {
          var lastBid = bids[i].innerHTML;
          var thisBid = streamJson.Bid;
          var thisClass = (thisBid > lastBid) ? "pfWsListContentGreenText" : ((thisBid < lastBid) ? "pfWsListContentRedText" : "colorgray");
          
          bids[i].innerHTML = decimalFormater(thisBid, 2);
          bids[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
          bids[i].classList.add(thisClass);
        }
        var asks = document.querySelectorAll('.liveStreamAsk'+thisSymbol);
        for(var i=0; i< asks.length; i++) {
          var lastAsk = asks[i].innerHTML;
          var thisAsk = streamJson.Ask;
          var thisClass = (thisAsk > lastAsk) ? "pfWsListContentGreenText" : ((thisAsk < lastAsk) ? "pfWsListContentRedText" : "colorgray");
          
          asks[i].innerHTML = decimalFormater(thisAsk, 2);
          asks[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
          asks[i].classList.add(thisClass);
        }
        var volumes = document.querySelectorAll('.liveStreamVolume'+thisSymbol);
        for(var i=0; i< volumes.length; i++) {
          volumes[i].innerHTML = VolFormatter.format(streamJson.TotalDailyVolume);
        }
        var change3MPcts = document.querySelectorAll('.liveStream3MChange'+thisSymbol);
        for(var i=0; i< change3MPcts.length; i++) {
          var startingPrice = document.getElementById("liveStream3MStart"+thisSymbol).value;
          if(startingPrice != undefined && startingPrice != "") {
            var thisChange = ((thisPrice/startingPrice)-1)*100;
            var thisClass = (thisChange > 0) ? "pfWsListContentGreenText" : ((thisChange < 0) ? "pfWsListContentRedText" : "colorgray");
            
            change3MPcts[i].innerHTML = decimalFormater(thisChange, 2);
            change3MPcts[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
            change3MPcts[i].classList.add(thisClass);
          }
        }
        var changeYTDPcts = document.querySelectorAll('.liveStreamYTDChange'+thisSymbol);
        for(var i=0; i< changeYTDPcts.length; i++) {
          var startingPrice = document.getElementById("liveStreamYTDStart"+thisSymbol).value;
          if(startingPrice != undefined && startingPrice != "") {
            var thisChange = ((thisPrice/startingPrice)-1)*100;
            var thisClass = (thisChange > 0) ? "pfWsListContentGreenText" : ((thisChange < 0) ? "pfWsListContentRedText" : "colorgray");
            
            changeYTDPcts[i].innerHTML = decimalFormater(thisChange, 2);
            changeYTDPcts[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
            changeYTDPcts[i].classList.add(thisClass);
          }
        }
        var change1YRPcts = document.querySelectorAll('.liveStream1YChange'+thisSymbol);
        for(var i=0; i< change1YRPcts.length; i++) {
          var startingPrice = document.getElementById("liveStream1YRStart"+thisSymbol).value;
          if(startingPrice != undefined && startingPrice != "") {
            var thisChange = ((thisPrice/startingPrice)-1)*100;
            var thisClass = (thisChange > 0) ? "pfWsListContentGreenText" : ((thisChange < 0) ? "pfWsListContentRedText" : "colorgray");
            
            change1YRPcts[i].innerHTML = decimalFormater(thisChange, 2);
            change1YRPcts[i].classList.remove("colorgray", "pfWsListContentGreenText", "pfWsListContentRedText");
            change1YRPcts[i].classList.add(thisClass);
          }
        }
      };

      wsStream.onclose = () => {
        setStreamStatus("CLOSED");
      };
    }

    function updateSubs() {
      var newSubs = [];
      var tickers = document.querySelectorAll('.liveStreamTicker');
      for(var i=0; i< tickers.length; i++) {
        var thisTick = tickers[i].innerHTML;
        if(! subscriptions.includes(thisTick)) {
          newSubs.push(thisTick);
          subscriptions.push(thisTick);
        }
      }

      if(newSubs.length > 0) {
        var subMsg = {};
        subMsg.cmd = "sub";
        subMsg.ticks = newSubs;
        wsStream.send(JSON.stringify(subMsg));
      }
    }

    function decimalFormater(inp, decPoints) {
      return parseFloat(inp).toFixed(decPoints);
    }
  }, [streamStatus]);
  return(   
    <>
       {streamStatus === 'LIVE'? <p class='btn btn--shockwave is-active'>{ streamStatus }</p>: <p>{ streamStatus }</p> }
    </>
);
}
export default LiveStream;