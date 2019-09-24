import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import styled from 'styled-components';
import { primary } from '../../styles/color';

const Checkbox = styled.View`
	width: 20px;
	height: 20px;
	position: relative;
	borderWidth: 2;
	borderColor: ${primary.enabled};
	margin: 2px 10px 2px 2px;
`;

const SvgContainer = styled.View`
	position: absolute;
	top: -2;
	left: -2;
`;

export const DefaultCheckbox = ({ checked, onPress }) => (
	<TouchableWithoutFeedback onPress={onPress}>
		<Checkbox>
			{
				checked ?
					<SvgContainer>
						<Svg height="20" width="20">
							<Path
								d="M4 4 L16 16 M4 16 L16 4"
								fill="none"
								stroke={primary.disabled}
								strokeWidth="2"
							/>
						</Svg>
					</SvgContainer> : null
			}
		</Checkbox>
	</TouchableWithoutFeedback>

);
