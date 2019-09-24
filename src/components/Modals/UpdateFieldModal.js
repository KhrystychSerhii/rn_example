import React from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// Components
import { DefaultTextInput } from '../Inputs/DefaultInput';
import { IconButton } from '../Buttons/IconButton'

// Styles
import { white } from '../../styles/color';

const StyledInnerModal = styled.View`
	flex: 1;
`;
const StyledCloseModalBlock = styled.View`
	flex: 0.75;
	backgroundColor: rgba(0,0,0,0.5);
`;
const StyledContentModalWrapper = styled.View`
	flex: 0.25;
	padding: 5px;
	backgroundColor: ${white.enabled};
	position: relative;
`;
const StyledButtonsWrapper = styled.View`
	margin-top: auto;
	bottom: 10px;
	right: 10px;
	flex-direction: row;
	justify-content: flex-end;
`;

export const UpdateFieldModal = ({ visible, onCloseModal, label, value, onChange, onSave }) => {
	const [buttonsVisible, setButtonsVisible] = React.useState(true);
	React.useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setButtonsVisible(false) });
		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setButtonsVisible(true) });

		return function cleanup() {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		}

	});

	return (
		<Modal
			animationType="fade"
			visible={visible}
			transparent={true}
			onRequestClose={onCloseModal}>
			{
				visible && (
					<StyledInnerModal>
						<TouchableWithoutFeedback onPress={onCloseModal}>
							<StyledCloseModalBlock />
						</TouchableWithoutFeedback>
						<StyledContentModalWrapper>
							<DefaultTextInput
								label={label}
								value={value}
								onChange={onChange}
								autoFocus={true}
								keyboardType={'email-address'}
							/>
							{
								buttonsVisible && (
									<StyledButtonsWrapper>
										<IconButton icon={ faSave } onPress={onSave} disabled={!value} />
									</StyledButtonsWrapper>
								)
							}
						</StyledContentModalWrapper>
					</StyledInnerModal>
				)
			}
		</Modal>
	)
};
