import React from 'react';
import {
    TextInput as TextInputNative
} from 'react-native';
import styled, {css} from 'styled-components/native';

const Input = (props) => (
    <TextInputNative  {...props}/>
);

export const TextInput  = styled(Input).attrs({
    underlineColorAndroid: props => props.underlineColorAndroid || 'rgba(0,0,0,0)',
    color: props => props.color || props.theme.text,
    borderRadius: props => props.borderRadius || props.theme.borderRadius,
    weight: props => props.weight || 'normal',
    size: props => props.size || '15',
    backgroundColor: props => props.backgroundColor || props.theme.bgTertiary
})`
    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    padding-top: 10;
    padding-left: 10;
    padding-right: 10;
    padding-bottom: 10;
    border: 1px solid #fff;
    margin-top: 10;
    margin-bottom: 10;
    text-align-vertical: ${props => (props.multiline ? 'top' : 'center')};
    background-color: ${props => props.backgroundColor};
`
