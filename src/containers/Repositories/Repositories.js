import React from 'react';
import styled from 'styled-components/native';
import {
  compose,
  withHandlers,
  withProps,
  setPropTypes,
  withState,
  lifecycle
} from 'recompose';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';

// local
import {getUsersRepos, clear} from '../../actions';
import {Wrapper, TopBar, Text, Button, FlatList, EmptyText, Icon} from '../../components/shared';
import {navigatorStyle} from '../../config';
import {RepositoryItem} from '../../components/Repositories';

const enhance = compose(
	connect(({repository}) => ({repository}),{getUsersRepos, clear}),
	setPropTypes({
		getUsersRepos: func.isRequired,
		repository: object.isRequired,
		clear: func.isRequired
	}),
	withHandlers({
		handleOpenSearchUser: ({navigator}) => () => {
			navigator.showLightBox({
				screen: 'SearchUser',
				style: {
					tapBackgroundToDismiss: true
				},
				adjustSoftInput: 'resize'
			});			
		},

		handleClearSearchUser: ({clear}) => () => {
			clear();
		}
	})
);
export const Repositories = enhance(({
	handleOpenSearchUser,
	handleClearSearchUser,
	repository,
	refreshHandler,
	loading}) => {
	return (
	   	<Wrapper>
	   		<TopBar 
	   			leftComponent={
	   				<WrapperLeft>
	   					{repository.name ? <Text inverted>Repositórios de {repository.name}</Text> : <Text inverted>Lista de Repositórios</Text>}
	   				</WrapperLeft>
	   			}
	   			rightComponent={
	   				<WrapperRigth>
	   					{!repository.allIds.length ? 
	   						(<Button icon onPress={handleOpenSearchUser}>
			   					<Icon size={30} inverted name="ios-person-add"/>
			   				</Button>)
	   						: (<Button icon onPress={handleClearSearchUser}>
		   						<Icon size={30} inverted name="ios-trash"/>
		   					</Button>)}
		   			</WrapperRigth>
	   			}
	   		/>
	   		<WrapperInfo loading={loading}>
	   			<FlatList
		            keyExtractor={id => id.toString()}
		            onEndReachedThreshold={1.5}
		            ListEmptyComponent={
		              <EmptyText>Selecione um usuário no botão de cima, para listar os repositorios.</EmptyText>
		            }
		            data={repository.allIds}
		            renderItem={({item}) => <RepositoryItem repositoryId={item} />}
		          />	
	   		</WrapperInfo>
	   		
		</Wrapper> 
  );
});

const WrapperInfo = Wrapper.extend`
	padding-left: 10;
	padding-right: 10;
`;

const WrapperRigth = styled.View``;
const WrapperLeft = styled.View``;