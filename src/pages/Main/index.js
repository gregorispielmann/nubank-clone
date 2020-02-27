import React from 'react';

import {Container, Content, CardContainer} from './styles';

import {Animated, Dimensions} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Menu from '~/components/Menu';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Card from '~/components/Card';

export default function Main() {
  const translateY = new Animated.Value(0);
  let offset = 0;

  const screenHeight = Dimensions.get('screen').height;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;
      let opened = false;

      offset += translationY;

      if (translationY >= 70) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 450 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 450 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <CardContainer
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-450, 0, 450],
                    outputRange: [-1, 0, screenHeight / 2 + 40],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Card
              iconName="credit-card"
              iconTitle="Cartão de Crédito"
              title="FATURA ATUAL"
              description="R$ 847,21"
              showDescription
              annotation="Compra mais recente em Facebook.com no valor de R$ 29,45"
              iconFooter="computer"
            />
            <Card
              iconName="account-balance-wallet"
              iconTitle="NuConta"
              title="Saldo disponível"
              description="R$ 25,50"
              annotation="Transferência de R$ 503,00 para Fulano de Tal sexta"
              iconFooter="done"
            />
          </CardContainer>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
