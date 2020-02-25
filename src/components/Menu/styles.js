import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Animated} from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const QRContainer = styled.View`
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;

  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  color: #fff;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  padding: 15px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
