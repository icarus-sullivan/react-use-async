import React from 'react';
import { withAsync } from '@sullivan/use-async';


const Button = ({ dispatch, data, loading, error, ...props }) => (
	<div>
		<pre>{JSON.stringify({ loading, data, error })}</pre>
		<button onClick={dispatch}>{loading ? 'Loading' : 'Request' }</button>
	</div>
);

export default withAsync(fetch, 'https://github.com')(Button);