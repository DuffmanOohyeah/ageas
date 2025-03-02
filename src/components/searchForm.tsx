import { JSX, useState, useRef, RefObject } from 'react';
import { GeoResultsProps, get as getGeoLoc } from '../utils/geoLocation';
import { Link, useNavigate } from 'react-router-dom';
import { UrlParamProps } from '../utils/urlParams';

const getSearchVal = (sf: RefObject<any>): string => {
	let cityVal: string = '';
	const formObj = sf.current;
	if (formObj) {
		const cityObj = formObj['city'];
		if (cityObj) cityVal = cityObj.value;
	}
	return cityVal;
};

const SearchForm = (props: UrlParamProps): JSX.Element => {
	const { lat, lng } = props;
	const searchForm = useRef<any>(null);
	const [city, setCity] = useState<string>('');
	const [geoResults, setGeoResults] = useState<GeoResultsProps[]>([]);
	const navigate = useNavigate();

	let _lat: number = 0;
	if (lat) _lat = parseFloat(lat);
	let _lng: number = 0;
	if (lng) _lng = parseFloat(lng);

	return (
		<>
			<form ref={searchForm} className='p-5 bg-stone-200 m-3 rounded-lg'>
				<div>
					<label htmlFor='city' className='mr-5'>
						Enter town or city (min. 3 chars.):
					</label>
					<input
						type='text'
						value={city}
						id='city'
						onChange={(evt) => {
							evt.preventDefault();
							setCity(getSearchVal(searchForm));
						}}
					/>
					<button
						className='ml-5 bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 rounded'
						type='button'
						disabled={city.length > 2 ? false : true}
						onClick={async (evt) => {
							evt.preventDefault();
							setGeoResults(await getGeoLoc(city));
						}}
					>
						Search
					</button>
					<button
						className='ml-5 bg-gray-300 hover:bg-gray-200 py-1 px-2 rounded'
						type='button'
						onClick={(evt) => {
							evt.preventDefault();
							navigate('/');
						}}
					>
						Clear
					</button>
				</div>
			</form>
			<>
				{city.trim().length > 2 ? (
					<>
						<h1 className='font-bold'>Search Results</h1>
						{geoResults.length ? (
							<div className='flex flex-row justify-center items-center'>
								<ul
									className='text-sm text-left'
									style={{ listStyle: 'circle' }}
								>
									{geoResults.map((row, idx) => {
										return (
											<li
												key={idx}
												className={`${
													_lat === row.latitude &&
													_lng === row.longitude &&
													'bg-yellow-200'
												}`}
											>
												<Link
													to={`/${row.latitude}/${row.longitude}`}
													className='text-blue-500'
												>
													{row.name},
												</Link>{' '}
												{row.country}, {row.timezone}
											</li>
										);
									})}
								</ul>
							</div>
						) : (
							'No locations found; please use search function.'
						)}
					</>
				) : (
					'Please use search function to start.'
				)}
			</>
		</>
	);
};

export default SearchForm;
