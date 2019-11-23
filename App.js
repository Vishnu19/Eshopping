import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Image,
} from 'react-native';

import { createAppContainer} from 'react-navigation';
import {DrawerActions , createDrawerNavigator} from 'react-navigation-drawer';
import MyCart from "./screens/MyCart";
import Home from "./screens/Home";
import OfferZone from "./screens/OfferZone";
import MyProducts from './screens/MyProducts';
import Categories from './screens/Categories';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  OfferZone : {
    screen: OfferZone,
  },
  MyProducts : {
    screen: MyProducts,
  },
  MyCart: {
    screen: MyCart,
  },
  Categories: {
    screen: Categories,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends Component{

  render() {
    return (

        <MyApp/>
    );
  }

} ;
