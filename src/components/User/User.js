import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';

import { IconButton } from '../../components';

import { StyledText } from '../../styles/font';
import { primary } from '../../styles/color';

const StyledMainView = styled.View`
	${
		props => props.mode === 'list' ? `
			width: 100%;
			flex-direction: row;
			margin-bottom: 3px;
		` : `
			width: 50%;
			align-items: center;
		`
	}
	border-width: 1;
	border-color: ${primary.enabled};
	
`;

const StyledImage = styled.Image`
	${
		props => props.mode === 'list' ? `
			width: 100;
			height: 100;
		` : `
			width: 100%;
			aspect-ratio: 1;
			height: auto;
		`
	}
`;

const StyledInfoView = styled.View`
	padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${
		props => props.mode === 'list' ? `
			flex: 1;
		` : `
			width: 100%;
		`
	}
`;

const StyledTextView = styled.View`
	align-self: flex-start;
`;

export const User = ({ user, viewMode, onInfoPress }) => {
	return (
		<StyledMainView mode={viewMode}>
			<StyledImage mode={viewMode} source={{ uri: user.avatar_url }} />
			<StyledInfoView mode={viewMode}>
				<StyledTextView>
					<StyledText>
						<StyledText bold={true}>Login: </StyledText>
						<StyledText large={true}>{user.login}</StyledText>
					</StyledText>
					<StyledText>
						<StyledText bold={true}>Type: </StyledText>
						<StyledText large={true}>{user.type}</StyledText>
					</StyledText>
				</StyledTextView>
				<IconButton icon={ faInfoCircle } onPress={() => { onInfoPress(user) }} />
			</StyledInfoView>
		</StyledMainView>
	)
};
