import React from 'react';
import { Container, TypeProps } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  type?: TypeProps;
}

export function Input({ type = 'primary', ...rest }: Props) {
  return (
    <Container {...rest} />
  )
}