//import { ViewProps } from '../Helpers/Types';
//import { HourlyWeather } from '../Helpers/Types';
'use client'

import { HourlyWeather } from "../Helpers/Types";

function HourlyListItem( { hourData } : { hourData: HourlyWeather}) {
    const date = new Date(hourData.dt * 1000);

    let options: Intl.DateTimeFormatOptions = { 
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'short'
    };

    return (
        <tr >
            <td> { Intl.DateTimeFormat('en-US', options).format(date) }</td>
            <td>                     
                <span className="hrlyTemp">{ hourData.temp.toPrecision(2) }&#0176; </span>
            </td>
            <td>
                <img className="hrlyConditionsIcon" alt="weathericon" src={`http://openweathermap.org/img/wn/${hourData.weather[0].icon}.png`} />    
                { hourData.weather[0].main } 
            </td>
            <td> { hourData.feels_like.toPrecision(2) }&#0176; </td>
            <td> { hourData.humidity }% </td>
            <td> { hourData.wind_speed.toPrecision(2) } mph </td>
            <td> { hourData.dew_point.toPrecision(2) }&#0176; </td>
        </tr>
    );    
}

export default HourlyListItem;