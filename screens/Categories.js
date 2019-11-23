import React , {Component} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import Headercustom from '../components/Headercustom';
import CartCard from '../components/CartCard';
import MultilistComponent from '../components/MultilistComponent';

class MyCart extends Component {
    static navigationOptions = {
        drawerLabel: 'Categories',
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
            < Headercustom onPress={this.navAction} name={'Categories'} />
            <MultilistComponent/>

          </>
        );
    }
}
export default MyCart;