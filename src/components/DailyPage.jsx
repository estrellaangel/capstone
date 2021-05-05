import React, { useState } from 'react'

function DailyPage(props) {

    function getCords(){   
        x = event.pageX;
        y = event.pageY;
        console.log("(X: " + x + ", Y: " + y + ")");
    }


    return (
        <>
        <div id="weatherAnimation" className="weatherAnimation">
        </div>
        <div id="weatherSlider" className="weatherSlider"> 
            <div className="my-5">
                <label htmlFor="customRange1">Time of Day</label>
                <input type="range" className="custom-range" id="customRange1" onMouseDown={() => {  }}/>
            </div>
        </div>
        <div id="shortWeatherInfo" className="shortWeatherInfo">

        </div>
        </>
    )
}

export default DailyPage




