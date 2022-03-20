import React, {useState} from 'react';
import {Button, InputGroup, Form } from 'react-bootstrap';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const iconfaSearch = <FontAwesomeIcon icon={ faSearch } />
var showResultCounterOptions = 0;
var inputSearchTermOptions;
var dup_array_keyOptions = [];
var dup_array_splitOptions = [];
var change_searchTerm_keyOptions;

$(document).ready(function(){
    $(".searchboxSelectDropdown").click(function(){
        $("#container_loading").hide();
        $("#quoteSearchOptions").hide();
    })
    $(".header").click(function(){
        $("#container_loading").hide();
        $("#quoteSearchOptions").hide();
    })
    $(".secmain").click(function(){
        $("#container_loading").hide();
        $("#quoteSearchOptions").hide();
    })
    $("#listInputOptions").click(function(){
        $("#quoteSearchOptions").show();
    })
    $("#btnSupportResistance").click(function(){
        $("#showSupportResistance").show();
    });
     $("#showSupportResistance").click(function(){
         $("#showSupportResistance").hide();
     })
     setInterval(function(){
         if (! $('#quoteSearchOptions').children().length > 0 ) {
        }
     }, 1000)
     $("#showSupportResistance").click(function(){
         $("#showSupportResistance").hide();
     })
     setInterval(function(){
         if (! $('#quoteSearchOptions').children().length > 0 ) {
        }
     }, 500)
  $('#listInputOptions').keyup(function() {
    showResultCounterOptions = 0;
    $("#quoteSearchOptions").show();
    document.getElementById("quoteSearchOptions").innerHTML = "";
    inputSearchTermOptions = $("#listInputOptions").val();
    window.x_getItem = localStorage.getItem("hello1");
    dup_array_keyOptions = window.x_getItem;
    dup_array_keyOptions = dup_array_keyOptions.split(",");
    dup_array_keyOptions.map((dup_array_keyOptions, index)=>{ 
        dup_array_splitOptions = dup_array_keyOptions.split("|");
        dup_array_splitOptions.map((aaa, ind)=>{
            if(ind == 0 && showResultCounterOptions <= 20){ 
                if(inputSearchTermOptions == ''){
                  }
                  else if(aaa.toLocaleLowerCase().includes(inputSearchTermOptions)){
                    var firstCharacter_one_key = aaa.substring(0,1).toLocaleLowerCase();                    
                    var firstCharacter_two_key = aaa.substring(0,2).toLocaleLowerCase();
                    var firstCharacter_three_key = aaa.substring(0,3).toLocaleLowerCase();
                    var firstCharacter_four_key = aaa.substring(0,4).toLocaleLowerCase();
                    var firstCharacter_five_key = aaa.substring(0,5).toLocaleLowerCase();
                    var firstCharacter_six_key = aaa.substring(0,6).toLocaleLowerCase();
                    var firstCharacter_seven_key = aaa.substring(0,7).toLocaleLowerCase();
                    var firstCharacter_eight_key = aaa.substring(0,8).toLocaleLowerCase();
                    var firstCharacter_nine_key = aaa.substring(0,9).toLocaleLowerCase();
                    var firstCharacter_ten_key = aaa.substring(0,10).toLocaleLowerCase();
                    if(firstCharacter_one_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 1){
                        console.log('aaa: >>>>>>>>> 2222 ' + aaa);
                        showResultCounterOptions = showResultCounterOptions + 1;
                        console.log('showResultCounterOptions------:  ' + showResultCounterOptions);
                        $("#quoteSearchOptions").show();
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_two_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 2){
                        
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_three_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 3){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_four_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 4){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_five_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 5){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_six_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 6){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_seven_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 7){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_eight_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 8){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_nine_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 9){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                    else if(firstCharacter_ten_key.includes(inputSearchTermOptions) && inputSearchTermOptions.length === 10){
                        if(change_searchTerm_keyOptions !== inputSearchTermOptions){
                            change_searchTerm_keyOptions = inputSearchTermOptions;
                            document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                        else{
                          document.getElementById("quoteSearchOptions").innerHTML += "<div class='listSelect'>" + aaa + "</div>";
                        }
                    }
                }
            }
            else {
            }
        })
    })

  });
})

function Quotebody_new() { 
  var test_json = [];
  var symbol_2;
  var name;
  var myJson = {    
  }
  var searchTerm_1;
  var x_getItem;
  var apicall_flag = 0;
  const [searchTerm_2, setSearchTerm_2] = useState(''); 
  x_getItem = localStorage.getItem("hello1");

  React.useEffect(() => {
    console.log('window.cookiesItem:    >>>>> ' + window.cookiesItem);
    if(!window.cookiesItem){ 
        console.log('React.useEffect: >>>>> ')
          if(apicall_flag == 0){
           var myHeaders = new Headers();
           myHeaders.append("DevAuth", "2399efa3-8141-41f4-8cdd-5bfc2efe8ded");
           var requestOptions = {
             method: 'GET',
             headers: myHeaders,
           };   
           fetch("https://webapp20211006.zsenia.com/data/ticker/list/full/compressed", requestOptions)
           .then(response => response.text())  
           .then(result => { 

                setTimeout(function(){
                    const resultMatches = result.includes('A|Agilent');
                    if(resultMatches == true){  
                        setSearchTerm_2(result);
                    }
                }, 10000);
           }) 
           .catch(error => console.log('error', error)); 
        apicall_flag = 1; 
      }  
    }
}, []);
    setTimeout(function(){
        console.log('window.cookiesItem Length:   ' + window.cookiesItem.length);
        const resultMatches =  window.cookiesItem.includes('A|Agilent');
        if(resultMatches == true){  
            console.log('Result Matches');
            $('.quoteSearchDropbox').fadeIn(100);
        }
        else{
            localStorage.setItem("hello1", window.cookiesItem); 
            $('.quoteSearchDropbox').fadeIn(100);
        }
    }, 15000);
    window.cookiesItem = localStorage.getItem("hello1");  
    // console.log("window.cookiesItem if 11111:  " + window.cookiesItem);

   if(!window.cookiesItem){
        searchTerm_1 = searchTerm_2.split('|E|');
        localStorage.setItem("hello1", searchTerm_1); 
        x_getItem = localStorage.getItem("hello1");
        window.cookiesItem = localStorage.getItem("hello1");  
        console.log("window.cookiesItem if:  " + window.cookiesItem.length);      
        console.log("window.cookiesItem if:  " + window.cookiesItem);  
        $('.quoteSearchDropbox').fadeIn(100);
    }
    else{ 
        console.log("window.cookiesItem else:   " + window.cookiesItem);  
        $('.quoteSearchDropbox').fadeIn(100);
    }
   var dup_array = x_getItem.split(","); 
   dup_array.map((dup_array, index1)=>{ 
        if(dup_array.length > 0){
        var dup_array_2 = dup_array.split("|");
        dup_array_2.map((symbol, index)=>{ 
            if(index === 0){
            symbol = symbol.replace('[', '');
            symbol_2 = symbol;
            }
            if(index === 1){
            name = symbol
            }
            })
            myJson = {
            "symbol" : symbol_2,
            "name" : name
        };
        test_json.push({"symbol" : symbol_2, "name" : name});
        }
    });

  return (
    <>
  <div className="quoteInner">
        <section className="searchboxSelectDropdown">            
            <div className="quotetickerName">
                <h3>APPLE INC. (AAPL)</h3>
            </div>
            <div className="quoteSearchDropbox">
                <div className="selectDropQuote">
                    <Form.Select aria-label="Default select example" id="selectDropQuote" className="selectDropQuote">
                        <option value="ticker">Ticker</option>
                        <option value="options">options</option>
                        <option value="portfolios">portfolios</option>
                        <option value="zindex">z-index</option>
                    </Form.Select>
                </div>
                <div className="searchboxQuote">
                    <InputGroup className="mb-3">
                        <input type="text" placeholder="Search Options" id="listInputOptions" autocomplete="off"/>
                        <Button variant="outline-secondary" id="button-addon2">{ iconfaSearch }</Button>
                    </InputGroup>                      
                    <div class="loading-box" id="container_loading">
                        <div class="loader"></div>
                        <h6>Loading...</h6>
                    </div>
                    <div className="quoteSearch" id="quoteSearchOptions">
                        {/* search Options list will show here */}
                    </div>
                </div>
            </div>
        </section>

        <section className="selectedOptions" id="selectedOptions">
            <h5>EOD</h5>
            <div className="selectedOptions_tableHead">
            <table>
                <thead>
                    <tr>
                        <th>LAST</th>
                        <th>CHANGE</th>
                        <th>VOLUME</th>
                        <th>OPEN INT</th>
                        <th>IMPLIED VOLATILITY</th>
                        <th>STRIKE</th>
                        <th>LAST</th>
                        <th>CHANGE</th>
                        <th>VOLUME</th>
                        <th>OPEN INT</th>
                        <th>IMPLIED VOLATILITY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="4">Calls</td>
                        <td colSpan="3">NOV 26, 2021 (2 DAYS)</td>
                        <td colSpan="4">PUTS</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="selectedOptions_tableBody">
                <table>
                    <tbody>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                        <tr>
                            <td>17.95</td>
                            <td>2.50</td>
                            <td>533.00</td>
                            <td>1813.00</td>
                            <td>2.14</td>
                            <td>145.00</td>
                            <td>0.05</td>
                            <td>-0.06</td>
                            <td>1476.00</td>
                            <td>8348.00</td>
                            <td>0.97</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section className="secTabsmain">
            <ul>
                <li>Analytics Quick Review</li>
                <li>Similar Securities</li>
                <li>Hedging Correlations</li>
                <li>Market Event Analytics</li>
                <li>Export as PDF</li>
            </ul>
        </section>
    </div>
    </>
  ); 
}


export default Quotebody_new;
