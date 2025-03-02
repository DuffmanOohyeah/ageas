import {
	WiCelsius,
	WiDaySunny,
	WiDaySunnyOvercast,
	WiFog,
	WiDayShowers,
	WiDaySleet,
	WiRain,
	WiRainWind,
	WiSnow,
	WiSnowWind,
	WiShowers,
	WiThunderstorm,
	WiDaySnowThunderstorm,
} from 'react-icons/wi';

interface ConvertProps {
	condition: string;
	icon: any;
}

const convert = (code: number): ConvertProps => {
	let rtnObj: ConvertProps = {
		condition: 'Not known',
		icon: WiCelsius,
	};

	switch (code) {
		case 0:
			rtnObj = {
				condition: 'Clear sky',
				icon: WiDaySunny,
			};
			break;
		case 1:
		case 2:
		case 3:
			rtnObj = {
				condition: 'Mainly clear, partly cloudy, and overcast',
				icon: WiDaySunnyOvercast,
			};
			break;
		case 45:
		case 48:
			rtnObj = { condition: 'Fog and depositing rime fog', icon: WiFog };
			break;
		case 51:
		case 53:
		case 55:
			rtnObj = {
				condition: 'Drizzle: Light, moderate, and dense intensity',
				icon: WiDayShowers,
			};
			break;
		case 56:
		case 57:
			rtnObj = {
				condition: 'Freezing Drizzle: Light and dense intensity',
				icon: WiDaySleet,
			};
			break;
		case 61:
		case 63:
		case 65:
			rtnObj = {
				condition: 'Rain: Slight, moderate and heavy intensity',
				icon: WiRain,
			};
			break;
		case 66:
		case 67:
			rtnObj = {
				condition: 'Freezing Rain: Light and heavy intensity',
				icon: WiRainWind,
			};
			break;
		case 71:
		case 73:
		case 75:
			rtnObj = {
				condition: 'Snow fall: Slight, moderate, and heavy intensity',
				icon: WiSnowWind,
			};
			break;
		case 77:
			rtnObj = { condition: 'Snow grains', icon: WiSnow };
			break;
		case 80:
		case 81:
		case 82:
			rtnObj = {
				condition: 'Rain showers: Slight, moderate, and violent',
				icon: WiShowers,
			};
			break;
		case 85:
		case 86:
			rtnObj = {
				condition: 'Snow showers slight and heavy',
				icon: WiSnowWind,
			};
			break;
		case 95:
			rtnObj = {
				condition: 'Thunderstorm: Slight or moderate',
				icon: WiDaySnowThunderstorm,
			};
			break;
		case 96:
		case 99:
			rtnObj = {
				condition: 'Thunderstorm with slight and heavy hail',
				icon: WiThunderstorm,
			};
			break;

		default:
			rtnObj = { condition: 'Not known', icon: WiCelsius };
			break;
	}

	return rtnObj;
};

export { convert };
