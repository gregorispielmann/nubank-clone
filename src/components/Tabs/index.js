import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 10],
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="smartphone" size={24} color="#fff" />
          <TabText>Recarga de celuar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="attach-money" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="monetization-on" size={24} color="#fff" />
          <TabText>Empréstimos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="settings" size={24} color="#fff" />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-outline" size={24} color="#fff" />
          <TabText>Me ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon2 name="barcode" size={24} color="#fff" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock-open" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon2 name="credit-card-multiple" size={24} color="#fff" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
