import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CardTwoComponent = (props) => (
  <Card onPress={()=> props.onPress()} >
    <Card.Cover source={props.imageUri} />
  </Card>
);

export default CardTwoComponent;