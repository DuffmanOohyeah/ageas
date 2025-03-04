export interface GeoResultsProps {
	id: number;
	name: string;
	latitude: number;
	longitude: number;
	elevation: number;
	feature_code: string;
	country_code: string;
	timezone: string;
	population: number;
	country_id: number;
	country: string;
}

const get = async (
	city: string,
	count: number = 10
): Promise<GeoResultsProps[]> => {
	let geoResults: GeoResultsProps[] = [];

	/* start: set up & call api */
	let geoApi: string = 'https://geocoding-api.open-meteo.com/v1/search?';
	geoApi += `count=${count}&`;
	geoApi += 'format=json&';
	geoApi += 'language=en&';
	geoApi += 'name=' + city.trim();
	const response: Response = await fetch(geoApi);
	/* end: set up & call api */

	if (response.ok && response.status === 200) {
		/* start: massage data to perfom another call, etc. */
		const geoData = await response.json();
		const { results } = geoData;
		if (results) geoResults = results; // should be an array
	} else {
		/* there was an error during the api call; log it, display to screen, etc. */
	}

	return geoResults;
};

export { get };
