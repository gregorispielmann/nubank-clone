import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

export const Card = styled.View`
  width: ${Dimensions.get('window').width - 40}px;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const IconTitle = styled.Text`
  font-family: 'Montserrat';
  font-size: 14px;
  color: #666;

  margin-left: 10px;
`;

export const LeftIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RightIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HideValue = styled.View`
  z-index: 2;
  position: absolute;
  top: 100px;
  left: 30px;
  height: 50px;
  width: 200px;
  border-radius: 4px;
  background: #eee;
  opacity: ${props => (!props.showDescription ? 1 : 0)};
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Montserrat';

  font-size: 13px;
  font-weight: bold;
  color: #8b10ae;
`;

export const Description = styled.Text`
  font-family: 'Montserrat';

  font-size: 32px;
  font-weight: bold;
  margin-top: 3px;
  color: #8b10ae;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: center;

  background: #eee;
  border-radius: 3px;
  padding: 30px;
`;

export const Annotation = styled.Text`
  margin-left: 15px;
  font-family: 'Montserrat';

  font-size: 12px;
  color: #333;
`;
