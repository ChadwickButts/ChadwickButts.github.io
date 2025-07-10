'use client'

import { AllWeather, GeoDataTransfer, HourlyWeather } from '../Helpers/Types';
import HourlyTable from './HourlyTable';

function HourlyView({ weatherData, location }: { weatherData: AllWeather, location: GeoDataTransfer }) {
     if (weatherData === null) {
         return (
            <span>No Data</span>
         );
     } else {
         const hourlyWeather: Array<HourlyWeather> = weatherData.hourly;

         if (hourlyWeather !== undefined) {
             return (
                 <HourlyTable hourlyData={hourlyWeather}></HourlyTable>
             );
         } else {
             return (
                 <div>Data is unavailable.</div>
             )
         }
     }
}

export default HourlyView;