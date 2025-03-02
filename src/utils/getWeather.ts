interface DailyProps {
	time: string[];
	weather_code: number[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	wind_speed_10m_max: number[];
}

export interface WeatherResultProps {
	latitude: number;
	longitude: number;
	elevation: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	daily: DailyProps;
}

const defaultResults: WeatherResultProps = {
	latitude: 0,
	longitude: 0,
	elevation: 0,
	generationtime_ms: 0,
	utc_offset_seconds: 0,
	timezone: '',
	timezone_abbreviation: '',
	daily: {
		time: [],
		weather_code: [],
		temperature_2m_max: [],
		temperature_2m_min: [],
		wind_speed_10m_max: [],
	},
};

const get = async (
	lat: any,
	lng: any,
	days: number = 5
): Promise<WeatherResultProps> => {
	let weatherResults: WeatherResultProps = defaultResults;

	if (lat && lng) {
		let weatherApi: string = 'https://api.open-meteo.com/v1/forecast?';
		weatherApi += `latitude=${lat}&`;
		weatherApi += `longitude=${lng}&`;
		weatherApi += `forecast_days=${days}&`;
		weatherApi +=
			'daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max';
		// weatherApi += 'hourly=temperature_2m';
		const response: Response = await fetch(weatherApi);

		if (response.ok && response.status === 200) {
			weatherResults = await response.json();
			// console.log('weatherResults:', weatherResults);
		} else {
			/* there was an error during the api call; log it, display to screen, etc. */
		}
	}

	return weatherResults;
};

export { get, defaultResults };
