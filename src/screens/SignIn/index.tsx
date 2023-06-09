import React from 'react';
import { Container, Content, Title, Brand, ForgotPasswordButton, ForgotPasswordLabel } from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { KeyboardAvoidingView, Platform } from 'react-native';
import BrandImage from '@assets/brand-2.png';


export function SignIn() {

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : undefined}>
        <Content>
          <Brand source={BrandImage} />
          <Title>
            Entrar
          </Title>
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

          <ForgotPasswordButton>
            <ForgotPasswordLabel> Esqueci minha senha </ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button title='Acessar' type='secondary' />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )

}