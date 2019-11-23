import React , {Component} from 'react';
import {Button, Dimensions, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import Headercustom from '../components/Headercustom';
import Category from '../components/Category';

const { height, width } = Dimensions.get('window');

class OfferZone extends Component {
  static navigationOptions = {
    drawerLabel: 'Offer Zone',
    drawerIcon: ({ tintColor }) => (
      <Icon name='branding-watermark' />
    ),
  };
  navAction = () =>{
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  };

  render() {
    return (
      <>
        < Headercustom onPress={this.navAction} name={'Offers For You'} />

          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Offers For You
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={10}
                >
                  <Category imageUri={require('../assets/ha.jpg')}
                            name="Upto 30% Off" style={{elevation : 7}}
                  />
                  <Category imageUri={require('../assets/mobiles.jpg')}
                            name="30%-50% Off"
                  />
                  <Category imageUri={require('../assets/speakers.jpg')}
                            name="Upto 30% Off"
                  />
                  <Category imageUri={require('../assets/laptops.jpg')}
                            name="10%-40% Off"
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Trending in store
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of Homes Equipments for quality & comfort

                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/images.jpg')}
                  />

                </View>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>

                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of Cool Gadgets for affordable prices.

                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/images1.jpg')}
                  />

                </View>
              </View>
            </View>
          </ScrollView>

        <Button
          onPress={() => this.props.navigation.navigate('MyProducts')}
          title="Go to Products"
        />
      </>
    );
  }
}
export default OfferZone;