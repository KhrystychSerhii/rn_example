import React from 'react';
import { PermissionsAndroid } from 'react-native'
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import styled from 'styled-components';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { size } from '../../styles/icon';

// Components
import { DetailsTextLine } from '../Lines/DetalsTextLine'
import { IconButton } from '../Buttons/IconButton';
import { RoundButton } from '../Buttons/RoundButton';
import { UpdateFieldModal } from '../Modals/UpdateFieldModal';

// Helpers
import { userViewParser, UPDATED_USER_FIELDS } from '../../helpers';

// Constants
import { IMAGE_PICKER_OPTIONS } from '../../helpers/Constants';


const StyledMainView = styled.ScrollView`
	flex: 1;
`;
const StyledSectionContainer = styled.View`
	padding: 5px;
	position: relative;
`;
const StyledUserImage = styled.Image`
	width: 100%;
	aspect-ratio: 1;
	height: auto;
`;
const StyledLineWrapper = styled.View`
	position: relative;
`;

const SignedInUser = ({ user, permissions }) => {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [editableKey, setEditableKey] = React.useState('');
	const [editableProperty, setEditableProperty] = React.useState('');
	const [updatedUser, setUpdatedUser] = React.useState(null);

	React.useEffect(() => {
		setUpdatedUser(user);
	}, ['user']);

	const openModal = (key, property) => {
		setEditableKey(key);
		setEditableProperty(property);
		setModalVisible(true);
	};
	const closeModal = () => {
		setModalVisible(false);
		setEditableKey('');
		setEditableProperty('');
	};

	const onPropertyChange = (key, value) => {
		setUpdatedUser({
			...updatedUser,
			[key]: value
		});
	};

	const saveUpdated = () => {
		console.log('save user', updatedUser);
	};

	const openImagePicker = () => {
		ImagePicker.showImagePicker(IMAGE_PICKER_OPTIONS, (response) => {
			if (!!response && !response.error && !response.didCancel) {
				setUpdatedUser({
					...updatedUser,
					avatar_url: response.uri
				});
			}
		});
	};

	if (!updatedUser) return null;
	return (
		<StyledMainView>
			<StyledSectionContainer>
				<StyledUserImage source={{ uri: updatedUser.avatar_url }} />
				{
					permissions[PermissionsAndroid.PERMISSIONS.CAMERA] && <RoundButton icon={ faEdit } onPress={openImagePicker} styles={{ position: 'absolute', right: 10, bottom: 10 }} />
				}
			</StyledSectionContainer>

			<StyledSectionContainer>
				{
					userViewParser(user)
					.map(({ key, property, value }) => (
						<StyledLineWrapper key={key}>
							<DetailsTextLine property={property} value={value} />
							{
								UPDATED_USER_FIELDS.includes(key) && <IconButton icon={ faEdit } iconSize={size.s} onPress={() => {openModal(key, property)}} styles={{ position: 'absolute', right: 10, top: 5 }} />
							}
						</StyledLineWrapper>
					))
				}
				<UpdateFieldModal
					visible={modalVisible}
					onCloseModal={closeModal}
					label={editableProperty}
					value={updatedUser && updatedUser[editableKey]}
					onChange={(value) => onPropertyChange(editableKey, value)}
					onSave={saveUpdated}
				/>
			</StyledSectionContainer>
		</StyledMainView>
	)
};

const mapStateToProps = (state) => ({
	permissions: state.device.permissions
});

export default connect(mapStateToProps, null)(SignedInUser)
