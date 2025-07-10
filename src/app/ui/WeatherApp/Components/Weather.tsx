'use client';

import React, { useEffect, useRef, useState } from 'react';
import WeatherAPI from '../API/WeatherAPI';
import '../weather.css';
import WeatherNav from './WeatherNav';
import TodayView from './TodayView';
import HourlyView from './HourlyView';
import DailyView from './DailyView';

import { formatLocation } from '../Helpers/StringUtils';
import { AllWeather, CurrentWeather, GeoDataTransfer, } from '../Helpers/Types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Weather() {
    const queryClient = new QueryClient();
    const [loading, setLoading] = useState<boolean>(true);
    const [location, setLocation] = useState<GeoDataTransfer>({} as GeoDataTransfer);
    const [weatherData, setWeatherData] = useState<CurrentWeather>({} as CurrentWeather);
    const [currentView, setCurrentView] = useState<string>("todayView");
    const [viewComponent, setViewComponent] = useState<Array<React.ReactElement>>([]);
    const memoRequestCount = useRef(0);


    useEffect(() => {
        setLoading(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const locObject: GeoDataTransfer = {
                    location: '',
                    zip: '',
                    geoData: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        name: '',
                        state: '',
                        country: ''
                    }
                };

                setLocation(locObject);
                setLoading(false);
            });
        } else {
            console.log("Geolocation not available.");
        }
    }, []);

    const handleSearchClick = (location: string) => {
        let formattedLocation: string, locObject: GeoDataTransfer;
        let zipPattern = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

        if (location !== '') {
            formattedLocation = zipPattern.test(location) ? '' : formatLocation(location);

            locObject = {
                location: formattedLocation,
                geoData: {
                    lat: 0,
                    lon: 0,
                    name: '',
                    state: '',
                    country: ''
                },
                zip: zipPattern.test(location) ? location : ''
            };

            setLocation(locObject);
        }
    }

    const handleViewChange = (id: string) => {
        let btnId = id;

        let currentView = btnId === 'hourly'
            ? 'hourlyView' : btnId === 'daily'
                ? 'dailyView' : btnId === 'maps'
                    ? 'mapsView' : 'todayView';

        setCurrentView(currentView);
    }

    let options: Intl.DateTimeFormatOptions = {
        month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true
    };

    let date = new Intl.DateTimeFormat('en-US', options).format(new Date());
    // let dailyComponent = null;
    // let hourlyComponent = null;

    if (weatherData !== undefined) {
        //options.timeZone = weatherData.timezone;
        date = ''//new Intl.DateTimeFormat('en-US', options).format(new Date(weatherData.current?.dt * 1000 * (weatherData.current?.timezone / 3600 )));
        // dailyComponent = <DailyView location={this.state.location.location} weatherData={this.state.weatherData}/>
        // hourlyComponent = <HourlyView location={this.state.location.location} weatherData={this.state.weatherData}/>
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div id="weatherApp">
                <WeatherNav onViewChange={handleViewChange} onSearchClick={handleSearchClick} />
                <main className='viewContainer'>
                    {loading
                        ? <main className='viewContainer'>
                            <h3>Loading...</h3>
                        </main>
                        : <main className='viewContainer'>
                            <h2 className="location">{location.location}</h2>
                            <h3 id="time">{date}</h3>
                            <TodayView location={location} />
                        </main>
                    }
                </main>
            </div>
        </QueryClientProvider>
    );
}

export default Weather;