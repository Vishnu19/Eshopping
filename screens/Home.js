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

class Home extends Component {

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
                < Headercustom onPress={this.navAction} name={'EShopping'} />
                
                <ScrollView
                  scrollEventThrottle={16}
                >
                  <View style={{ width: width , height: 500 }}>
                    <Grid>
                      <Row>
                        <Col  style={{backgroundColor : '#fff1e9',}}>
                        <View style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24,marginTop : 'auto' ,
                         marginBottom: 'auto', width: '90%', marginLeft:10, height : 200, alignContent: 'center'}}>
                           <CardTwoComponent  imageUri={require('../assets/offers.jpg')} onPress={() => this.props.navigation.navigate('OfferZone')}/>
                         </View>
                        </Col>
                        <Col  style={{backgroundColor : '#5d1451'}}>
                        <View style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24,marginTop : 'auto' ,
                         marginBottom: 'auto', width: '90%', marginLeft:10, height : 200, alignContent: 'center'}}>
                            <CardTwoComponent  imageUri={require('../assets/products.jpg')} onPress={() => this.props.navigation.navigate('MyProducts')}/>
                         </View>
                        </Col>
                      </Row>
                      <Row  style={{backgroundColor : '#42b883'}}>
                      <View style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24,marginTop : 'auto' ,
                         marginBottom: 'auto', width: '90%', marginLeft:20, height : 200, alignContent: 'center'}}>
                            <CardTwoComponent  imageUri={require('../assets/images.jpg')} onPress={() => this.props.navigation.navigate('OfferZone')}/>
                         </View>
                      </Row>
                    </Grid>

                  </View>
                  <View style={{ width: width , height: 200 }}>
                    <Grid>
                      <Col>
                        <Row style={{backgroundColor : '#fda77f'}}>
                        <View style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24,marginTop : 'auto' ,
                         marginBottom: 'auto', width: '90%', marginLeft:20, height : 180, alignContent: 'center'}}>
                            <CardTwoComponent  imageUri={require('../assets/images1.jpg')} onPress={() => this.props.navigation.navigate('MyProducts')}/>
                         </View>
                        </Row>
                      </Col>
                    </Grid>

                  </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Categories')}
                    title="Go to Categories"
                />
                </ScrollView>
                <BottomNav/>
            </>
        );
    }
}
export default Home;