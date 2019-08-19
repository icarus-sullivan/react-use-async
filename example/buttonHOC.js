import React from 'react';
import { withAsync } from '@sullivan/use-async';

const LIBRARY = 'https://www.npmjs.com/package/@sullivan/use-async';

const Button = ({ dispatch, data, loading, error }) => (
	<div>
		<pre>{JSON.stringify({ loading, data, error })}</pre>
		<button onClick={() => dispatch(LIBRARY)}>
			{loading ? 'Loading' : 'Request' }
		</button>
	</div>
);

export default withAsync(fetch)(Button);