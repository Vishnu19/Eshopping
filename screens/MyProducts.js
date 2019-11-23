import React , {Component} from 'react';
import {Button, SafeAreaView, ScrollView, View, Dimensions} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import Headercustom from '../components/Headercustom';
import BottomNav from '../components/BottomNav';
import { Surface, Text, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ProductCategory from '../components/ProductCategory'
import CardComponent from '../components/CardComponent';
import ItemPage from './ItemPage';

const { height, width } = Dimensions.get('window');

class MyProducts extends Component {
  static navigationOptions = {
    drawerLabel: 'Product',
    drawerIcon: ({ tintColor }) => (
      <Icon name='tablet-android' />
    ),
  };
  navAction = () =>{
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  };
 
  render() {

    return (
      <>
        < Headercustom onPress={this.navAction} name={'Products'} />
          <ScrollView
            scrollEventThrottle={16}
          >
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, }}>
          <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20 }}>
             Products Currently Available :
          </Text>
         </View>
         <View  style={{elevation : 10,height: 170,marginTop : 10,  }}>
            <Card style={{elevation : 10, height: 150,backgroundColor: '#003f5c' }}>
            <View style={styles.viewstyle}>
            <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={10}
                >
                  <ProductCategory imageUri={require('../assets/laptops.jpg')}
                            name="Laptops" style={{elevation : 7}}
                  />
                  <ProductCategory imageUri={require('../assets/ha.jpg')}
                            name="Accesories" style={{elevation : 7}}
                  />
                  <ProductCategory imageUri={require('../assets/mobiles.jpg')}
                            name="Mobiles" style={{elevation : 7}}
                  />
                  <ProductCategory imageUri={require('../assets/speakers.jpg')}
                            name="Speakers" style={{elevation : 7}}
                  />
                  <ProductCategory imageUri={require('../assets/laptops.jpg')}
                            name="Gaming Devices" style={{elevation : 7}}
                  />
                </ScrollView>
                </View>
            </Card>
        </View>
        <View>
                  <CardComponent imageUri={require('../assets/images1.jpg')}
                            name="New Gadgets"/>
               </View>
               <View  style={{elevation : 10,height: 200,marginTop : 10,  }}>
               
            <Card style={{elevation : 10, height: 170,backgroundColor: '#1089ff' }}>
            <Text style={{ fontSize: 17, fontWeight: '900', paddingHorizontal: 20, color : 'white' }}>
             Great Deals:
          </Text>
            <View style={styles.viewstyle}>
            <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={10}
                >
                  <ProductCategory imageUri={require('../assets/laptops.jpg')}
                            name="Laptops" style={{elevation : 7}}
                  />
                  <ProductCategory imageUri={require('../assets/ha.jpg')}
                            name="Accesories" style={{elevation : 7}} 
                  />
                  <ProductCategory imageUri={require('../assets/mobiles.jpg')}
                            name="Mobiles" style={{elevation : 7}} 
                  />
                  <ProductCategory imageUri={require('../assets/speakers.jpg')}
                            name="Speakers" style={{elevation : 7}} 
                  />
                  <ProductCategory imageUri={require('../assets/laptops.jpg')}
                            name="Gaming Devices" style={{elevation : 7}} 
                  />
                </ScrollView>
                </View>
            </Card>
        </View>
        <View>
                  <CardComponent imageUri={require('../assets/images.jpg')}
                            name="New Gadgets" />
               </View>
        </ScrollView>
        <Button
          onPress={() => this.props.navigation.navigate('OfferZone')}
          title="Go to Offer Zone"
        />
      </>
    );
  }
}
export default MyProducts;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 100,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  viewstyle : {
    height: 200,
    alignItems: 'center',
    padding: 8,
    elevation: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});