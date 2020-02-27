import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  QRContainer,
  AccountContainer,
  Account,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 1],
        }),
      }}>
      <QRContainer>
        <QRCode
          value="http://pixeltech.com.br"
          size={70}
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </QRContainer>
      <AccountContainer>
        <Account>
          Banco
          <Text style={{fontWeight: 'bold'}}> 260 - Nu Pagamentos S.A.</Text>
        </Account>
        <Account>
          Agência <Text style={{fontWeight: 'bold'}}>0001</Text>
        </Account>
        <Account>
          Conta <Text style={{fontWeight: 'bold'}}>33333333-3</Text>
        </Account>
      </AccountContainer>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>TROCAR DE CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
