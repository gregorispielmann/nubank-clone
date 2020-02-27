import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Animated} from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
  flex: 1;
  min-height: 600px;
`;

export const QRContainer = styled.View`
  background: #fff;
  padding: 8px;
  align-self: center;
`;

export const AccountContainer = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Account = styled.Text`
  font-family: 'Montserrat';

  font-size: 12px;
  font-weight: normal;
  color: #fff;
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
  font-family: 'Montserrat';

  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
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
  font-family: 'Montserrat';

  color: #fff;
  font-weight: bold;
`;
