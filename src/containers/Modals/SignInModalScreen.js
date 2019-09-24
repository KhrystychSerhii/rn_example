import React from 'react';
import {View, Text} from "react-native";
import { connect } from 'react-redux';
import styled from 'styled-components/native';

// Actions
import { signInAction } from '../../store/actions';

// Components
import { SignInForm, SignedInUser } from '../../components';


const StyledMainView = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;

const SignInScreen = ({ user, loading, signIn, updateUser }) => {
	return (
		<StyledMainView>
			{
				loading && <View><Text>Loading</Text></View>
			}
			{
				(!user && !loading) && <SignInForm signIn={signIn} />
			}
			{
				(!!user && !loading) && <SignedInUser user={user} updateUser={updateUser} />
			}
		</StyledMainView>
	)
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	loading: state.auth.loading
});

const mapDispatchToProps = (dispatch) => ({
	signIn: (user) => dispatch(signInAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
