import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoriesItem from '../../Components/Categories/CategoriesItem';
import CategoriesItemCoupon from '../../Components/Categories/CategoriesItemCoupon';

const Spesa = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image source={require('../../Assets/images/logo.jpg')} />
        </View>
        <View style={{marginTop: 30, marginHorizontal: 20, marginBottom: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#575CFF',
                height: 25,
                width: 25,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.goBack()}>
              <FontAwesome name="arrow-left" color="#ffffff" />
            </TouchableOpacity>
            <Text style={{fontSize: 16, lineHeight: 18, color: '#000000'}}>
              OFFERTE SPESA ONLINE
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItemCoupon />
        <CategoriesItemCoupon />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Spesa;

const styles = StyleSheet.create({});
