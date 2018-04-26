import React from 'react';
import styled from 'styled-components/native';
import {
  compose,
  withHandlers,
  setPropTypes,
  withState
} from 'recompose';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';

// local
import {getUsersRepos} from '../../actions';
import {Wrapper, TopBar, Text, Button, TextInput} from '../../components/shared';

const enhance = compose(
	connect(({repository}) => ({repository}),{getUsersRepos}),
	withState('searchUser', 'setSearchUser', ''),
	withState('loading', 'setLoading', false),
	setPropTypes({
		getUsersRepos: func.isRequired,
		repository: object.isRequired
	}),
	withHandlers({
		handleCancelSearchUser: ({navigator}) => () => {
			navigator.dismissLightBox();
		},
		handleConfirmedSearchUser: ({searchUser, getUsersRepos, navigator}) => async () => {
			navigator.dismissLightBox();
			await getUsersRepos(searchUser);
		}
	})
);
export const SearchUser = enhance(({handleCancelSearchUser, searchUser, setSearchUser, handleConfirmedSearchUser}) => {
	return (	
	   	<WrapperInfo>
			<Text>Digite o nome do usuário:</Text>
			<TextInput value={searchUser} onChangeText={(e) => setSearchUser(e)} />
			<WrapperButtom>
				<Button danger onPress={handleCancelSearchUser}>
					<Text inverted>Cancelar</Text>
				</Button>
				<Button success onPress={handleConfirmedSearchUser}>
					<Text inverted>Adcionar</Text>
				</Button>
			</WrapperButtom>
		</WrapperInfo> 
  );
});


const WrapperInfo = styled.View`
	background-color: #fff;
    width: 300;
    padding-vertical: 20;
    padding-horizontal: 20;
`;

const WrapperButtom = styled.View`
	flex-direction: row;
	justify-content: center;
	padding-vertical: 10;

`;
