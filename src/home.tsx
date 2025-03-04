import { JSX } from 'react';
import SearchForm from './components/searchForm';
import Forecast from './components/forecast';
import { useParams } from 'react-router-dom';
import { UrlParamProps } from './utils/urlParams';

const Home = (): JSX.Element => {
	const { lat, lng } = useParams();
	const props: UrlParamProps = { lat: lat, lng: lng };

	return (
		<div className='App'>
			<h1 className='pb-3 pt-3 font-bold'>
				Ageas :: Web Developer Tech Test / Weather Forecast
			</h1>
			<SearchForm {...props} />
			{lat && lng && <Forecast {...props} />}
		</div>
	);
};

export default Home;
