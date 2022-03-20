import React, { useState } from "react";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const iconfaBookmark = <FontAwesomeIcon icon={faBookmark} />

function QuotePageApinews(){
  var quoteTitleData =[];
  var justNow = "Just now";
  var  minsAgo = " mins ago";
  var  hoursAgo = " Hours ago";
  const [newsResult, setNewsResult] = useState({});
  const timer = setTimeout(() => { 
    const timerIntervel = setInterval(() => {  
      global.newsAPI = global.newsAPI;
      }, 120000)
}, 20000)
  React.useEffect(() => {
      fetch(global.newsAPI, global.requestOptions)
      .then(response => response.json())  
      .then(result => setNewsResult(result)) 
  }, []);
  newsResult && newsResult.articles && newsResult.articles.map(article =>
    {
      var currentdate =new Date().getTime()
      var timestamp = new Date(article && article.pubDate)
      var diffTime = currentdate - timestamp;
      var secDiffTime =  diffTime/(1000);
      var minsfinalTime =  diffTime/(1000*60);
      var finalTime = parseFloat(minsfinalTime).toFixed(0) + minsAgo
      var hoursDiffTime =  diffTime/(1000*60*60);     

      if(minsfinalTime >= 60){
        var finalTimehours = hoursDiffTime;
        finalTime = parseFloat(finalTimehours).toFixed(0) + hoursAgo;
      }     
      else if (minsfinalTime === 0){
        var finalTime = justNow;
      }
      var dataObj = new Date(timestamp * 1000);
      var hours = dataObj.getUTCHours();
      quoteTitleData.push({ hours: hours, minutes: finalTime, title: article.title, link : article.link, source : article.source } )
    })

    if(newsResult && newsResult.breakingNews && newsResult.breakingNews.title !== ''){
      var breakingNewsTitle = newsResult && newsResult.breakingNews && newsResult.breakingNews.title;
      var breakingNewsLink = newsResult && newsResult.breakingNews && newsResult.breakingNews.link;
      var breakingNewsSource = newsResult && newsResult.breakingNews && newsResult.breakingNews.source;
      var breakingNewsPubDate = newsResult && newsResult.breakingNews && newsResult.breakingNews.pubDate;

      var currentdate =new Date().getTime()
      breakingNewsPubDate = currentdate - breakingNewsPubDate;
      var DiffTimeBreaking =  breakingNewsPubDate/(1000*60);
      var hoursDiffTimeBreaking =  breakingNewsPubDate/(1000*60*60);
      var finalDiffTimeBreaking = parseFloat(DiffTimeBreaking).toFixed(0) + minsAgo;

      if(DiffTimeBreaking >= 60){
        var finalTimehours = hoursDiffTimeBreaking;
        finalDiffTimeBreaking = parseFloat(finalTimehours).toFixed(0) + hoursAgo;
      }   
      else if (DiffTimeBreaking === 0){
        var finalDiffTimeBreaking = justNow;
      }
    }
  return(
    <>
        {newsResult && newsResult.breakingNews && newsResult.breakingNews.title !== ''?       
        <li className="activeTopstories">
            <a target="_blank" href={breakingNewsLink}>
            <h4>{ breakingNewsTitle }</h4>
            <h5>Read More</h5>
            <div className="storiesTimeLink">
                <h6 className="newsLink">{ breakingNewsSource }</h6>
                <div className="newsLinkIconAttachment">
                    <h6> 
                    {(breakingNewsPubDate <= 1? justNow: finalDiffTimeBreaking)}
                    </h6>
                    <p>{iconfaBookmark}</p>
                </div>
            </div>
            </a>
        </li>: null }
      { quoteTitleData.map(article =>         
        <li><a target="blank" href={article.link}>
            <h4>{ article.title }</h4>
            <h5>Read More</h5>
            <div className="storiesTimeLink">
                <h6 className="newsLink">{ article.source }</h6>
                <div className="newsLinkIconAttachment">
                    <h6> 
                        { article.minutes }
                    </h6>
                    <p>{iconfaBookmark}</p>
                </div>
            </div>
            </a>
        </li>
        ) }
    </>
);
}
export default QuotePageApinews;