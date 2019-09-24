import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from "react-native";
import {primary} from "../../styles/color";
import {StyledText} from "../../styles/font";

import { DefaultCheckbox } from '../Checkboxes/DefaultCheckbox';

const TextRow = styled.View`
	flex-direction: row;
	flex: 1;
	borderBottomWidth: 1;
	borderBottomColor: ${primary.enabled};
	margin: 3px;
`;
const FromContainer = styled.View`
	flex: .2;
	height: 100%;
	padding-right: 5px;
`;
const MessageContainer = styled.View`
	flex: .8;
	height: 100%;
	padding-top: 3px;
`;
export const Notification = ({ from = '', text = '', checked = false, onPress = () => null }) => {
	return (
		<TextRow>
			<DefaultCheckbox checked={checked} onPress={onPress} />
			<FromContainer>
				<StyledText large={true} numberOfLines={1}>{from}</StyledText>
			</FromContainer>
			<MessageContainer>
				<StyledText numberOfLines={1}>
					{ text }
				</StyledText>
			</MessageContainer>
		</TextRow>
	)
};
