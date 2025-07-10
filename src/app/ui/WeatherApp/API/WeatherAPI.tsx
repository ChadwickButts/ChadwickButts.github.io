import { AllWeather, CurrentWeather, GeoDataTransfer } from '../Helpers/Types';

// hardcoding API KEY to be sure app works
const API_KEY = '432eace0ad36cac5cc3975003b08e252';


const WeatherAPI = {

    async asyncGetGeoCoordinates(geoObject: GeoDataTransfer) {
        let geoDataPromise;
        let geoData;

        if (geoObject.geoData.lat !== undefined && geoObject.geoData.lon !== undefined) {
            geoDataPromise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${geoObject.geoData.lat}&lon=${geoObject.geoData.lon}&limit=5&appid=${API_KEY}`);
            geoData = await geoDataPromise.json();

            // Reverse Geocoding
            // https://openweathermap.org/api/geocoding-api#reverse
            geoData = geoData[0];
        } else {
            if (geoObject.zip !== '') {
                geoDataPromise = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${geoObject.zip}&limit=5&appid=${API_KEY}`);
                geoData = await geoDataPromise.json();
            } else {
                // Direct Geocoding
                // https://openweathermap.org/api/geocoding-api#direct
                geoDataPromise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${geoObject.location}&limit=5&appid=${API_KEY}`);
                geoData = await geoDataPromise.json();
                const { local_names, ...geoProps } = geoData[0];

                geoData = geoProps;
            }
        }


        geoObject.geoData = geoData;

        geoObject.location = geoData.name
            + ((geoData.state !== undefined) ? ', ' + geoData.state : '')
            + ', ' + geoData.country;

        return geoObject;
    },

    async getCurrentWeather(location: GeoDataTransfer): Promise<CurrentWeather> {

        let geoCoords: GeoDataTransfer = await this.asyncGetGeoCoordinates(location);
        let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${geoCoords.geoData.lat}&lon=${geoCoords.geoData.lon}&units=imperial&appid=${API_KEY}`;

        // Current Weather
        // https://openweathermap.org/current
        let weatherDataRequest: Response = await fetch(url);
        let weatherData: CurrentWeather = await weatherDataRequest.json();

        return weatherData;
    }
}

export default WeatherAPI;