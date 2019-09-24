import React from 'react';
import styled from 'styled-components';
import { StyledText } from '../../styles/font';
import { primary } from '../../styles/color';

const TextRow = styled.View`
	flex-direction: row;
	flex: 1;
	align-self: stretch;
	borderBottomWidth: 1;
	borderBottomColor: ${primary.enabled};
	margin-bottom: 3px;
	padding-bottom: 3px;
`;
const TextContainerStyles = 'flex: 1; align-self: stretch';
const ValueContainer = styled.View`
	${TextContainerStyles};
	position: relative;
`;
const KeyContainer = styled.View`
	${TextContainerStyles}
	margin-top: auto;
`;

export const DetailsTextLine = ({ property, value }) => (
	<TextRow>
		<KeyContainer>
			<StyledText bold={true}>{property}: </StyledText>
		</KeyContainer>
		<ValueContainer>
			<StyledText large={true}>{value}</StyledText>
		</ValueContainer>
	</TextRow>
);
