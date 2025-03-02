import { JSX } from 'react';
import SearchForm from './components/searchForm';
import Forecast from './components/forecast';
import { useParams } from 'react-router-dom';

const Home = (): JSX.Element => {
	const { lat, lng } = useParams();

	return (
		<div className='App'>
			<h1 className='pb-3 pt-3 font-bold'>
				Ageas :: Web Developer Tech Test / Weather Forecast
			</h1>
			<SearchForm lat={lat} lng={lng} />
			{lat && lng && <Forecast lat={lat} lng={lng} />}
		</div>
	);
};

export default Home;
