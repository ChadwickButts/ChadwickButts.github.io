'use client';

import React from 'react';
import SearchLocation from './SearchLocation';
import { NavPropTypes } from '../Helpers/Types';

function WeatherNav({ onViewChange, onSearchClick }: NavPropTypes ) {

    function handleViewClick(event: React.MouseEvent<HTMLButtonElement>) {
        let navElements = document.querySelectorAll("#viewsUL li");
        navElements.forEach(elem => {
            elem.classList.remove('active');
        })

        let parent = event.currentTarget.parentElement;
        parent?.classList.add('active');

        onViewChange(event.currentTarget.id)
    }

       return (
           <header>
                <nav>
                    <SearchLocation onSearchClick={onSearchClick} />
                    <ul id="viewsUL">
                        <li className="active">
                            <button type="button" id="today" onClick={handleViewClick}>Today</button> 
                        </li>
                        <li>
                            <button type="button" id="hourly" onClick={handleViewClick}>Hourly</button> 
                        </li>
                        <li>
                            <button type="button" id="daily" onClick={handleViewClick}>Daily (8-Days)</button> 
                        </li>
                        {/* <li>
                            <button type="button" id="maps" onClick={handleViewClick}>Weather Maps</button> 
                        </li> */}
                    </ul>
                </nav>
            </header>
       )
}

export default WeatherNav;