//import { DailyWeather } from "../Helpers/Types";
'use client'

import { DailyWeather } from "../Helpers/Types";

function DailyListItem( { day } : { day: DailyWeather}) {
    let options: Intl.DateTimeFormatOptions = { 
        weekday: "short", month: 'long', day: 'numeric',
        hour12: true
    };

    const date = new Intl.DateTimeFormat('en-US', options).format(new Date(day?.dt * 1000));

    return (
        <article className="dayCard" >
            <div className="dayCardMain">
                <figure>
                    <figcaption> {day.weather[0].main} </figcaption>
                    <img alt="weathericon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                    <figcaption> {day.temp.day.toPrecision(2)}℉ </figcaption>
                </figure>
                <span className="dayCardHigh">
                    high:
                    <span className="dayCardTemps"> {day.temp.max.toPrecision(2)}° </span>
                </span>
                <span className="dayCardLow">
                    low:
                    <span className="dayCardTemps"> {day.temp.min.toPrecision(2)}° </span>
                </span>
            </div>
            <span className="dayCardDate"> {date} </span>
            <span className="dayCardFeels">
                Feels Like:
                <span className="dayCardFeelsTemp"> {day.feels_like.day.toPrecision(2)}° </span>
            </span>
        </article>
    )

}

export default DailyListItem; 