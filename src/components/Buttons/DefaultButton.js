import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';


import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

import * as fontStyles from "../../styles/font";
import * as iconStyles from "../../styles/icon";
import {primary, lightGrey} from "../../styles/color";

const StyledButton = styled.TouchableOpacity`
	background-color: ${props => props.disabled ? primary.disabled : primary.enabled};
	padding: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const StyledButtonText = styled.Text`
	color:  ${props => props.disabled ? lightGrey.disabled : lightGrey.enabled};
	font-size: ${fontStyles.size.xl};
	font-weight: ${fontStyles.weight.l};
`;

export const DefaultButton = ({ text, icon, onPress = () => null, disabled = false , styles = {} }) => (
	<StyledButton onPress={onPress} disabled={disabled}>
		{
			!!icon && <FontAwesomeIcon icon={ icon } size={fontStyles.size.xl} color={disabled ? lightGrey.disabled : lightGrey.enabled} style={{marginRight: 5, marginLeft: 5}} />
		}
		<StyledButtonText disabled={disabled}>{text}</StyledButtonText>
	</StyledButton>
);
