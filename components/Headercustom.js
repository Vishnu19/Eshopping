import React, {Component, PropTypes} from "react";
import {Body, Button, Container, Header, Input, Item, Right, Left, Title} from "native-base";
import {ScrollView, Text} from "react-native";
import {DrawerActions} from 'react-navigation-drawer';
import { Icon, Avatar } from 'react-native-elements'

const Headercustom =(props) => {

        return(
          <>
              <Header rounded hasSegment>
                  <Left>
                      <Icon name ="menu" onPress={()=> props.onPress()}/>
                  </Left>
                  <Body>
                      <Title>{props.name}</Title>
                  </Body>
                  <Right>
                      <Button transparent>
                          <Icon name='shopping-cart' />
                      </Button>
                      <Button transparent>
                          <Icon name='favorite' />
                      </Button>
                      <Avatar
                        rounded
                        source={{
                            uri:
                              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                        showEditButton
                      />
                  </Right>
              </Header>

          </>
        )
};

export default Headercustom;
