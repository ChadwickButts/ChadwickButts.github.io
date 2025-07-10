'use client'

import { HourlyWeather } from '../Helpers/Types';
import HourlyListItem from './HourlyListItem';

function HourlyTable({ hourlyData } : { hourlyData: Array<HourlyWeather> }) {
    const rows = hourlyData.map( (data: HourlyWeather, i: number) => {
        return (
            <HourlyListItem key={i} hourData={data} />
        )
    });

    return (
        <section className="currentSection" >
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Temp</th>
                        <th>Conditions</th>
                        <th>Feels Like</th>
                        <th>Humidity</th>
                        <th>Wind Speed</th>
                        <th>Dew Point</th>
                        {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
         </section>
    )
}

export default HourlyTable;