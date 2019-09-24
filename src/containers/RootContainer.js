import React from 'react';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Navigator from '../Navigator';

// Actions
import { getSignedInUser, checkPermissions } from '../store/actions';

const StyledMainView = styled.View`
	flex: 1;
`;
const App = createAppContainer(Navigator);

const RootContainer = ({ getSignedInUser, checkPermissions }) => {
	React.useEffect(() => {
		getSignedInUser();
		checkPermissions();
	}, []);

	return (
		<StyledMainView>
			<App />
		</StyledMainView>
	)

};

const mapDispatchToProps = (dispatch) => ({
	getSignedInUser: () => dispatch(getSignedInUser()),
	checkPermissions: () => dispatch(checkPermissions()),
});

export default connect(null, mapDispatchToProps)(RootContainer)
