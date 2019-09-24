import React from 'react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';

// Store
import { store } from '../store';

export default () => (
	<Provider store={store}>
		<RootContainer />
	</Provider>
)
