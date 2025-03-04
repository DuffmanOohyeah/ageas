import { JSX } from 'react';

const PageNotFound = (): JSX.Element => {
	return (
		<div className='w-[50%] m-auto'>
			<h1 className='pt-5 font-bold'>Page not found (404 error)</h1>
			<div className='p-5 text-sm'>
				We're not sure where you're going, but it's not this way.
			</div>
		</div>
	);
};

export default PageNotFound;
