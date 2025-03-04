import { JSX, useEffect, useState } from 'react';
import {
	get as getWeather,
	WeatherResultProps,
	defaultResults,
} from '../utils/getWeather';
import { convert } from '../utils/weatherCode';
import moment from 'moment';
import { UrlParamProps } from '../utils/urlParams';

const Forecast = ({ lat, lng }: UrlParamProps): JSX.Element => {
	const [weatherResults, setWeatherResults] =
		useState<WeatherResultProps>(defaultResults);

	useEffect(() => {
		const wr = async (): Promise<void> => {
			const data: WeatherResultProps = await getWeather(lat, lng);
			setWeatherResults(data);
		};
		wr();
	}, [lat, lng]);

	const {
		daily: {
			time,
			weather_code,
			temperature_2m_min,
			temperature_2m_max,
			wind_speed_10m_max,
		},
	} = weatherResults;

	return (
		<>
			<h1 className='pt-5 font-bold'>5-Day Outlook</h1>
			<div className='flex justify-center text-sm'>
				{time && time.length ? (
					<>
						{time.map((tm, idx) => {
							const convertObj = convert(weather_code[idx]);
							const { condition, icon: Icon } = convertObj;

							return (
								<div
									key={idx}
									className='border-solid border-blue-500 rounded-lg border m-5 w-64'
								>
									{moment(tm).format('dddd, MMMM Do, YYYY')}
									<br />
									<div className='flex justify-center pt-3'>
										<Icon size={50} />
									</div>
									<br />
									<div className='pb-1'>
										Conditions:
										<br />
										{condition}
									</div>
									<br />
									<div className='pb-1'>
										Temperature (min / max):
										<br />
										{temperature_2m_min[idx]} /{' '}
										{temperature_2m_max[idx]} (celcius)
									</div>
									<br />
									<div className='pb-1'>
										Wind Speed:
										<br />
										{wind_speed_10m_max[idx]} (km/h)
									</div>
								</div>
							);
						})}
					</>
				) : (
					'No weather data found for the chosen city.'
				)}
			</div>
		</>
	);
};

export default Forecast;
