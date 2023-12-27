import React from "react";
import '../Recent/Recent.css'
import imgRec1 from '../image/1.png'
import imgRec2 from '../image/2.png'
import imgRec3 from '../image/3.png'
import { MdAccessTimeFilled } from "react-icons/md";


const Recent = () => {
    return (
        <section className="Sectionrecentr">
            <div className="RecentrLogoH1">
                <h1>Recent posts</h1>
            </div>
            
            <div className="DivCintainerRecent">

                <div className="DivMinContainer">
                    <img src={imgRec1} alt="delete" />
                    <h2>
                        May 23, 2022<span><MdAccessTimeFilled className="TimeField1" /> 5 minutes</span>
                    </h2>
                    <h3>My trip to Athens</h3>
                    <p>
                        It would seem that in a city where Theseus,<br />
                        Plato and Epicurus once walked, the very <br />
                        idea of the subway is alien to the city, but already...
                    </p>
                </div>

                <div className="DivMinContainer">
                    <img src={imgRec2} alt="delete" />
                    <h2>
                    May 22, 2022<span> <MdAccessTimeFilled className="TimeField2" />1 minutes</span>
                    </h2>
                    <h3>Vilnius resorts</h3>
                    <p>
                    I haven't seen any resorts in Vilnius, but there<br/>
                     are wonderful people and pubs
                    </p>
                </div>

                <div className="DivMinContainer">
                    <img src={imgRec3} alt="delete" />
                    <h2>
                        May 23, 2022<span><MdAccessTimeFilled className="TimeField3" /> 15 minutes</span>
                    </h2>
                    <h3>Tips for flying on a plane</h3>
                    <p>
                    If you have a fear of flying, here's a helpful tip: <br/>
                    bring your co-pilot so you can take a nap <br/>
                    while he steers the plane for you
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Recent;