import React, { Fragment } from 'react';
import {FlatList} from 'react-native';
import { connect } from 'react-redux';
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';
import { maxBy } from 'lodash'

import { IconButton } from '../../components';

// Actions
import { getUsersAction } from '../../store/actions';

// Components
import { User } from '../../components';

// Styled Components
const StyledMainView = styled.View`
	flex: 1;
`;
const StyledPageHeader = styled.View`
	flex-direction: row;
	justify-content: flex-end;
	padding: 5px;
`;

const HomeScreen = (props) => {
	const { navigation, users, loading, getUsers } = props;
	const [viewMode, setViewMode] = React.useState('list');

	React.useEffect(() => {
		getUsers();
	}, []);

	const onUserInfoPress = (user) => {
		navigation.push('Details', { login: user.login });
	};
	return (
		<StyledMainView>
			<StyledPageHeader>
				<IconButton icon={ faThList } onPress={() => setViewMode('list')} disabled={viewMode === 'list'} />
				<IconButton icon={ faThLarge } onPress={() => setViewMode('large')} disabled={viewMode === 'large'} />
			</StyledPageHeader>
			<FlatList
				data={users || []}
				key={viewMode}
				numColumns={ viewMode === 'list' ? 1 : 2 }
				renderItem={({ item }) => (<User key={item.node_id} user={item} viewMode={viewMode} onInfoPress={onUserInfoPress} />)}
				keyExtractor={user => user.node_id}
				initialNumToRender={users.length}
				onEndReached={(data) => {
					getUsers(maxBy(users, 'id').id + 1)
				}}
			/>
		</StyledMainView>
	)
};

const mapStateToProps = (state) => ({
	users: state.users.users,
	loading: state.users.loading
});

const mapDispatchToProps = (dispatch) => ({
	getUsers: (since) => dispatch(getUsersAction(since))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
