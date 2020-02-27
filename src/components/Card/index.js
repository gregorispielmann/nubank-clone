import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  IconTitle,
  LeftIcon,
  RightIcon,
  HideValue,
} from './styles';

export default function CardComponent({
  iconName,
  iconTitle,
  title,
  description,
  annotation,
  iconFooter,
  showDescription,
}) {
  const [showDesc, setShowDesc] = React.useState(showDescription);

  return (
    <Card>
      <CardHeader>
        <LeftIcon>
          <Icon name={iconName} size={28} color="#666" />
          <IconTitle>{iconTitle}</IconTitle>
        </LeftIcon>
        <RightIcon>
          <TouchableOpacity onPress={() => setShowDesc(!showDesc)}>
            <Icon
              name={showDesc ? 'visibility' : 'visibility-off'}
              size={28}
              color="#666"
            />
          </TouchableOpacity>
        </RightIcon>
      </CardHeader>
      <CardContent>
        <Title>{title}</Title>
        <HideValue showDescription={showDesc} />
        <Description>{description}</Description>
      </CardContent>
      <CardFooter>
        <Icon name={iconFooter} size={28} color="#666" />
        <Annotation>{annotation}</Annotation>
      </CardFooter>
    </Card>
  );
}
