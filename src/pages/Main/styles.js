import styled from 'styled-components';

import {Animated} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  font-family: 'Montserrat';
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight() + 20}px;

  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const CardContainer = styled(Animated.ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  contentContainerStyle: {},
})`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
