import React from 'react';
import { Text } from 'react-native';
import { faBell, faCog, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';

import { primary } from '../../styles/color';
import { size } from '../../styles/icon';
import { IconButton } from '../Buttons/IconButton';

const StyledHeaderRow = styled.View`
	height: 50;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	border-bottom-width: 2;
	border-bottom-color: ${primary.enabled};
	padding: 0 5px;
`;
const StyledIconsRow = styled.View`
	flex-direction: row;
	min-width: ${(size.m + 5) * 2}px;
`;

export const Header = ({ screenProps, navigation }) => {
	const routes = get(navigation, 'state.routes', []);
	const currentRouteName = get(routes, [routes.length - 1, 'routeName'], '');
	const goBack = () => {
		navigation.pop();
	};
	const openNotificationsModal = () => {
		navigation.navigate('Notifications');
	};
	const openSignInModal = () => {
		navigation.navigate('SignIn');
	};
	return (
		<StyledHeaderRow>
			<StyledIconsRow>
				{
					routes.length > 1 && <IconButton icon={ faArrowLeft } onPress={goBack} styles={{ marginLeft: 0 }} />
				}
			</StyledIconsRow>
			<Text>{currentRouteName}</Text>
			<StyledIconsRow>
				<IconButton icon={ faBell } onPress={openNotificationsModal} />
				<IconButton icon={ faUser } onPress={openSignInModal} />
			</StyledIconsRow>
		</StyledHeaderRow>
	)
};
