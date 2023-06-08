import React from 'react';
import { Container } from './styles'
import { Input } from '@components/Input';


export function SignIn() {

  return (
    <Container>
      <Input
        placeholder='E-mail'
        type='secondary'
        autoCorrect={false}
        autoCapitalize='none'
      />

      <Input
        placeholder='Senha'
        type='secondary'
        secureTextEntry
        autoCorrect={false}
        autoCapitalize='none'
      />
    </Container>
  )

}