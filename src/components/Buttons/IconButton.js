import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { size } from '../../styles/icon';
import { primary } from '../../styles/color';

const defaultStyles = {
	marginLeft: 5
};

export const IconButton = ({ icon, onPress = () => null, disabled = false , styles = {}, iconSize = size.m }) => (
	<TouchableOpacity onPress={onPress} disabled={disabled} style={{ ...defaultStyles, ...styles }}>
		<FontAwesomeIcon icon={ icon } size={iconSize} color={disabled ? primary.disabled : primary.enabled} />
	</TouchableOpacity>
);

