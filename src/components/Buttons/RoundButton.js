import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components';
import { size } from '../../styles/icon';
import { lightGrey, primary } from '../../styles/color';

const StyledTouchableOpacity = styled.TouchableOpacity`
	border-radius: 100;
	border-width: 1px;
	border-color: ${props => props.disabled ? primary.disabled : primary.enabled};
	background-color: ${props => props.disabled ? primary.disabled : primary.enabled};
	padding: 5px;
`;

export const RoundButton = ({ icon, onPress = () => null, disabled = false, styles = {} }) => (
	<StyledTouchableOpacity onPress={onPress} disabled={disabled} style={{ ...styles }}>
		<FontAwesomeIcon icon={ icon } size={size.m} color={disabled ? lightGrey.disabled : lightGrey.enabled} />
	</StyledTouchableOpacity>
);
