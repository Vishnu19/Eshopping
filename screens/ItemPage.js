import {Button, Dimensions, Image, SafeAreaView, SafeAreaViewComponent, ScrollView, Text, View} from 'react-native';
import {DrawerActions} from "react-navigation-drawer";
import React, {Component} from "react";
import Headercustom from "../components/Headercustom";
import {Icon} from 'react-native-elements';
import Category from '../components/Category';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';
import CardComponent from '../components/CardComponent';
import CardTwoComponent from '../components/CardTwoComponent';
import { Col, Row, Grid } from "react-native-easy-grid";
import BottomNav from '../components/BottomNav';

const { height, width } = Dimensions.get('window');

class ItemPage extends Component {

  constructor(){
    super();
    this.state = {

    }
  }

    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name='home' />
      ),
    };
  navAction = () =>{
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  };

    render() {
        return (
            <>
                < Headercustom onPress={this.navAction} name={'Product Detail'} />
                
                <ScrollView
                  scrollEventThrottle={16}
                >
                  <View style={{ width: width , height: 700 }}>
                    <Grid>
                      <Row>
                      <Image source={this.props.imageUri} style={{height: 200, width: null, flex: 1}}/>
                      </Row>
                    </Grid>

                  </View>
                  <Text>
                    {this.props.name}
                  </Text>

                <Button
                    onPress={() => this.props.navigation.navigate('MyProducts')}
                    title="Go Back"
                />
                </ScrollView>
                <BottomNav/>
            </>
        );
    }
}
export default ItemPage;