'use client'

import { useQuery } from '@tanstack/react-query';
import { CurrentWeather, GeoDataTransfer } from '../Helpers/Types';
import WeatherAPI from '../API/WeatherAPI';


export default function TodayView({ location }: { location: GeoDataTransfer }) {

    const { data, isPending, error } = useQuery({
        queryKey: ['weather', location.geoData.lat, location.geoData.lon],
        queryFn: () => WeatherAPI.getCurrentWeather(location),
        staleTime: 300
    });

    let options: Intl.DateTimeFormatOptions = {
        hour: 'numeric', minute: 'numeric', hour12: true,
        timeZone: 'utc' //props.weatherData.timezone/3600).toString()
    };

    if (isPending) {
        return <div>Loading...</div>
    } else {

        let sunrise = new Intl.DateTimeFormat('en-US', options).format(new Date(data?.sys.sunrise! * 1000 * (data?.timezone! / 3600)));
        let sunset = new Intl.DateTimeFormat('en-US', options).format(new Date(data?.sys.sunset! * 1000 * (data?.timezone! / 3600)));
        return (
            <div>
                <section className="currentSection" >
                    <div id="data?">
                        <section className='leftSide'>
                            <div className='details'>
                                <span id="temp">
                                    {data?.main.temp.toPrecision(2)}&deg;
                                </span>
                                <br />

                            </div>
                            <div id="weatherIcon">
                                <img alt="weathericon" src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} />
                            </div>
                            <div >
                                <span id="feels_like">Feels Like: {data?.main.feels_like.toPrecision(2)}&deg; </span>
                                <span id="humidity">Humidity: {data?.main.humidity.toPrecision(2)}%</span>
                                <br />
                                <span id="conditions">{data?.weather[0].main} • {data?.weather[0].description}</span>
                            </div>
                        </section>
                        <section className='rightSide'>
                            <div className='extraDetails'>
                                <span >Sunrise: {sunrise}</span>
                                <br />
                                <span >Sunset: {sunset}</span>
                                <br />
                                <span>Wind Speed: {data?.wind.speed}</span>
                                <br />
                                <span>Wind Direction: {data?.wind.deg}</span>                              
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}