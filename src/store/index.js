import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';

// Redux Root Reducer
import rootReducer from './reducers';

// Redux Saga
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Redux
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(
			sagaMiddleware,
		)
	)
);

// Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
	store
}
