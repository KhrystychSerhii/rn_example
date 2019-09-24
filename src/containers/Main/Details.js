import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Actions
import { getUserAction } from '../../store/actions';

// Components
import { DetailsTextLine } from '../../components';

// Helpers
import { userViewParser } from '../../helpers';

const StyledMainView = styled.ScrollView`
	flex: 1;
`;
const StyledSectionContainer = styled.View`
	padding: 5px;
`;
const StyledUserImage = styled.Image`
	width: 100%;
	aspect-ratio: 1;
	height: auto;
`;

const DetailsScreen = ({ screenProps, navigation: { state: { params }}, user, getUser}) => {
	React.useEffect(() => {
		if (params.login) getUser(params.login);
	}, []);

	if (!user) return null;
	return (
		<StyledMainView>
			<StyledSectionContainer>
				<StyledUserImage source={{ uri: user.avatar_url }} />
			</StyledSectionContainer>

			<StyledSectionContainer>
				{
					userViewParser(user)
					.map(({key, property, value}) => <DetailsTextLine key={key} property={property} value={value} />)
				}
			</StyledSectionContainer>
		</StyledMainView>
	)
};
const mapStateToProps = (state) => ({
	user: state.users.user,
	loading: state.users.loading
});
const mapDispatchToProps = (dispatch) => ({
	getUser: (login) => dispatch(getUserAction(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

