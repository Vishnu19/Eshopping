import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

class ProductCategory extends Component {
  render() {
    return (
      <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.8, borderColor: '#dddddd' }}>
        <View style={{ flex: 2 }}>
          <Image source={this.props.imageUri}
                 style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10,height: 100, backgroundColor: 'white' }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default ProductCategory;

