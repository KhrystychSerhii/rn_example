import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Styles
import { size } from '../../styles/font';
import { primary } from '../../styles/color';

const StyledText = styled.Text`
	color: ${props => props.disabled ? primary.disabled : primary.enabled };
	text-decoration-line: underline;
	font-size: ${size.m};
`;

export const TextButton = ({ text, onPress = () => null, disabled = false}) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<StyledText disabled={disabled}>
			{ text }
		</StyledText>
	</TouchableOpacity>
);
