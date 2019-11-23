import React , {Component} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import Headercustom from '../components/Headercustom';
import CartCard from '../components/CartCard';

class MyCart extends Component {
    static navigationOptions = {
        drawerLabel: 'My Cart',
      drawerIcon: ({ tintColor }) => (
      <Icon name='shopping-cart' />
      ),
    };
  navAction = () =>{
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  };
    render() {

        return (
          <>
            < Headercustom onPress={this.navAction} name={'My Cart'} />
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: '400', paddingHorizontal: 20 }}>
                Items In Cart
              </Text>
              <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <CartCard/>
              <Button
                onPress={() => this.props.navigation.navigate('MyProducts')}
                title="Add items to Cart"
              />
              </View>
            </View>
              <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
              />

          </>
        );
    }
}
export default MyCart;