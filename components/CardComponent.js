import React, { Component } from 'react';
import {Image, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';


export default class CardComponent extends Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  render() {
    return (
      <>
        <View style={{ height: 'auto', marginLeft: 20, marginRight: 10, marginBottom: 15, borderWidth: 0.5, borderColor: '#dddddd' }}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={this.props.imageUri} />
                <Body>
                  <Text>{this.props.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={this.props.imageUri} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.likes}</Text>
                </Button>
              </Left>
              <Right>
                <AirbnbRating size={15} showRating={false} />
              </Right>
            </CardItem>
          </Card>
        </Content>
        </View>
      </>
    );
  }
}
