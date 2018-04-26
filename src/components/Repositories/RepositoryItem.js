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
import {object, number} from 'prop-types';
import {connect} from 'react-redux';

// local
import {Text, Image} from '../shared';

const enhance = compose(
	connect(({repository}) => ({repository})),
	setPropTypes({
		repository: object.isRequired,
		repositoryId: number.isRequired
	}),
	withProps(({repository, repositoryId}) => ({
		data: repository.byId[repositoryId]
	}))
);
export const RepositoryItem = enhance(({data}) => {
	return (	
	   	<WrapperInfo>
	   		<WrapperCotent>
		   		<WrapperAvatar>
		   			<Avatar source={{uri: data.owner.avatar_url}}/>
		   		</WrapperAvatar>
		   		<WrapperDescription>
		   			<Text size={16} weight="700">{data.name}</Text>
		   			<Text size={14} secondary>{data.description}</Text>	
		   		</WrapperDescription>
	   		</WrapperCotent>
		</WrapperInfo> 
  );
});


const WrapperInfo = styled.View`
	margin-top: 5;
	margin-bottom: 5;
`;

const Avatar = Image.extend`
	width: 50;
	height: 50;
	border-radius: 25;
`;

const WrapperAvatar = styled.View`
	padding-right: 10;
`;

const WrapperCotent = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
    padding-left: 10;
	padding-right: 10;
	padding-top: 10;
	padding-bottom: 10;
`;
const WrapperDescription = styled.View`
	flex-wrap: wrap;
    flex: 1;
`;