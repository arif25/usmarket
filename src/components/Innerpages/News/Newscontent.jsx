import React from "react";
import icontopicsgeneral from '../../Assets/images/topicsicon_generalnews.png';
import topstories_1 from '../../Assets/images/400-200.jpg';
import topstories_2 from '../../Assets/images/400-200.jpg';
import topstories_3 from '../../Assets/images/400-200.jpg';
import savedstories_1 from '../../Assets/images/100-100.jpg';
import savedstories_2 from '../../Assets/images/100-100.jpg';
import savedstories_3 from '../../Assets/images/100-100.jpg';
import savedstories_4 from '../../Assets/images/100-100.jpg';
import savedstories_5 from '../../Assets/images/100-100.jpg';

function Newscontent(){
    return(
        <section className="secnewscontent">
            <div className="topics">
                <h2>Topics====</h2>
                <ul>
                    <li>
                        <div className="itemTopics">
                            <div className="icontopics">
                                <img src={icontopicsgeneral} alt="icon"/>
                            </div>
                            <h3>General News</h3>
                            <div className="btnview">
                                <a href="#">View</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemTopics">
                            <div className="icontopics">
                                <img src={icontopicsgeneral} alt="icon"/>
                            </div>
                            <h3>Market & Economy</h3>
                            <div className="btnview">
                                <a href="#">View</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemTopics">
                            <div className="icontopics">
                                <img src={icontopicsgeneral} alt="icon"/>
                            </div>
                            <h3>Futures Trading</h3>
                            <div className="btnview">
                                <a href="#">View</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemTopics">
                            <div className="icontopics">
                                <img src={icontopicsgeneral} alt="icon"/>
                            </div>
                            <h3>Industry News</h3>
                            <div className="btnview">
                                <a href="#">View</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemTopics">
                            <div className="icontopics">
                                <img src={icontopicsgeneral} alt="icon"/>
                            </div>
                            <h3>Investment Ideas</h3>
                            <div className="btnview">
                                <a href="#">View</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemTopics">
                            <div className="icontopics">
                                <img src={icontopicsgeneral} alt="icon"/>
                            </div>
                            <h3>Futures Trading</h3>
                            <div className="btnview">
                                <a href="#">View</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="topstories">
                <div className="newstitle">
                    <h2>Top Stories</h2>
                    <div className="bxbtnseeall">
                        <a href="">See all</a>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="itemtopstories">
                            <div className="bannertopstories">
                                <img src={topstories_1} alt="icon"/>
                            </div>
                            <div className="contentTopstories">
                               <h4>Black women says she was racially profiled by chicago police officer</h4>
                               <div className="contentTopstoriesButtons">
                                   <div className="readmore">
                                       <a href="">Read More</a>
                                   </div>
                                   <div className="dateBtn">
                                       <a href="">08/30/21</a>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemtopstories">
                            <div className="bannertopstories">
                                <img src={topstories_2} alt="icon"/>
                            </div>
                            <div className="contentTopstories">
                               <h4>Black women says she was racially profiled by chicago police officer</h4>
                               <div className="contentTopstoriesButtons">
                                   <div className="readmore">
                                       <a href="">Read More</a>
                                   </div>
                                   <div className="dateBtn">
                                       <a href="">08/30/21</a>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="itemtopstories">
                            <div className="bannertopstories">
                                <img src={topstories_3} alt="icon"/>
                            </div>
                            <div className="contentTopstories">
                               <h4>Black women says she was racially profiled by chicago police officer</h4>
                               <div className="contentTopstoriesButtons">
                                   <div className="readmore">
                                       <a href="">Read More</a>
                                   </div>
                                   <div className="dateBtn">
                                       <a href="">08/30/21</a>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="savednews">
                <div className="newstitle">
                    <h2>Saved</h2>
                    <div className="bxbtnseeall">
                        <a href="">See all</a>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="savedimage">
                            <img src={savedstories_1} alt="" />
                        </div>
                        <div className="savedcontent">
                            <h5>Black women says she was racially profiled by chicago police officer</h5>
                            <p>Yahoo news, Latest...</p>
                            <div className="savedButtons">
                                <div className="readmore">
                                    <a href="">Read More</a>
                                </div>
                                <div className="dateBtn">
                                    <a href="">08/30/21</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="savedimage">
                            <img src={savedstories_2} alt="" />
                        </div>
                        <div className="savedcontent">
                            <h5>Black women says she was racially profiled by chicago police officer</h5>
                            <p>Yahoo news, Latest...</p>
                            <div className="savedButtons">
                                <div className="readmore">
                                    <a href="">Read More</a>
                                </div>
                                <div className="dateBtn">
                                    <a href="">08/30/21</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="savedimage">
                            <img src={savedstories_3} alt="" />
                        </div>
                        <div className="savedcontent">
                            <h5>Black women says she was racially profiled by chicago police officer</h5>
                            <p>Yahoo news, Latest...</p>
                            <div className="savedButtons">
                                <div className="readmore">
                                    <a href="">Read More</a>
                                </div>
                                <div className="dateBtn">
                                    <a href="">08/30/21</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="savedimage">
                            <img src={savedstories_4} alt="" />
                        </div>
                        <div className="savedcontent">
                            <h5>Black women says she was racially profiled by chicago police officer</h5>
                            <p>Yahoo news, Latest...</p>
                            <div className="savedButtons">
                                <div className="readmore">
                                    <a href="">Read More</a>
                                </div>
                                <div className="dateBtn">
                                    <a href="">08/30/21</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="savedimage">
                            <img src={savedstories_5} alt="" />
                        </div>
                        <div className="savedcontent">
                            <h5>Black women says she was racially profiled by chicago police officer</h5>
                            <p>Yahoo news, Latest...</p>
                            <div className="savedButtons">
                                <div className="readmore">
                                    <a href="">Read More</a>
                                </div>
                                <div className="dateBtn">
                                    <a href="">08/30/21</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="savedimage">
                            <img src={savedstories_2} alt="" />
                        </div>
                        <div className="savedcontent">
                            <h5>Black women says she was racially profiled by chicago police officer</h5>
                            <p>Yahoo news, Latest...</p>
                            <div className="savedButtons">
                                <div className="readmore">
                                    <a href="">Read More</a>
                                </div>
                                <div className="dateBtn">
                                    <a href="">08/30/21</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Newscontent;