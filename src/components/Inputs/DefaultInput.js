import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { size, weight } from '../../styles/font';
import { lightGrey, dark, error } from '../../styles/color';

import styled from 'styled-components/native';

const StyledWrapper = styled.View`
	margin-bottom: ${props => props.lastChild ? '15px' : '5px'};
`;

const StyledInputLabelWrapper = styled.View`
	${props => props.horizontal ? 'flex-direction: row;' : ''}
`;

const StyledLabelWrapper = styled.View`
	margin-bottom: 5px;
	${props => props.horizontal ? 'flex: .3;' : ''}

`;
const StyledLabelText = styled.Text`
	font-size: ${size.xl};
	color: ${dark.enabled};
	margin-top: auto;
	margin-bottom: auto;
`;

const StyledTextInput = styled.TextInput`
	background-color: ${lightGrey.enabled};
	font-size: ${size.l};
	padding: 10px;
	margin-bottom: 5px;
	${props => props.horizontal ? 'flex: .7;' : ''}
`;

const InfoTextStyled = `margin-bottom: 5px;`;
const StyledTextError = styled.Text`
	${InfoTextStyled}
	color: ${error.enabled};
	font-size: ${size.m};
`;

export const DefaultTextInput = ({ error, value, onChange, label, keyboardType = 'default', secureTextEntry = false, autoFocus = false, lastChild = false, horizontal = false, editable = true }) => {
	return (
		<StyledWrapper lastChild={lastChild}>
			<StyledInputLabelWrapper horizontal={horizontal}>
				{
					!!label && (
						<StyledLabelWrapper horizontal={horizontal}>
							<StyledLabelText numberOfLines={1}>{label}</StyledLabelText>
						</StyledLabelWrapper>
					)
				}
				<StyledTextInput
					onChangeText={onChange}
					value={value}
					secureTextEntry={secureTextEntry}
					autoFocus={autoFocus}
					keyboardType={keyboardType}
					horizontal={horizontal}
					editable={editable}
				/>
			</StyledInputLabelWrapper>
			{
				error && <StyledTextError>{error}</StyledTextError>
			}
		</StyledWrapper>
	)
};
