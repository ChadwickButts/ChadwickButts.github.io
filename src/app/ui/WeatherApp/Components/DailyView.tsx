'use client'

import { useState } from 'react';
import { AllWeather, DailyWeather, GeoDataTransfer } from '../Helpers/Types';
import DailyListItem from './DailyListItem';

function DailyView( { weatherData, location } : { weatherData: AllWeather, location: GeoDataTransfer }) {
    const dailyWeather: any = weatherData.daily;
    const [activeDayCard, setActiveDayCard] = useState<React.SetStateAction<number>>();

    const handleItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (activeDayCard !== undefined) {
            let lastCard = document.getElementById("btn-" + activeDayCard);
            lastCard?.firstElementChild?.classList.toggle("active");
        }

        event.currentTarget.classList.toggle("active");
        setActiveDayCard(+event.currentTarget.id.charAt(event.currentTarget.id.length - 1));
    }

    if (dailyWeather !== undefined) {
        const days = dailyWeather.map((day: DailyWeather, i: number) => {
            return (
                <button key={i} id={"btn-" + i} className="dayCardBtn" type="button" onClick={handleItemClick}>
                    <DailyListItem day={day} />
                </button>
            );
        });

        return (
            <section className="currentSection" >
                <div className="dayContainer">
                    <h3>8-Day Weather Forecast</h3>
                    <div className="dayHorizontal">
                        {days}
                    </div>
                    {/* <div>
                            Active day is {activeDay}
                        </div>  */}
                </div>
            </section>
        );
    }  else {
        return (
            <div>Data is unavailable.</div>
        )
    }
    

}

export default DailyView;