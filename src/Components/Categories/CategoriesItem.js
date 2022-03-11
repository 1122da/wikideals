import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import images from '../../Assets/images';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoriesItem = () => {
  return (
    <View
      style={{
        marginTop: 10,
        height: 110,
        padding: 6,
        borderRadius: 10,
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
      }}>
      <Image style={{height: 80, width: 80}} source={images.phone} />
      <View style={{marginLeft: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 250,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 8, lineHeight: 14, color: '#575CFF'}}>
            AMAZON
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#575CFF',
                height: 25,
                width: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Icon name="sharealt" color="#ffffff" />
            </View>

            <View
              style={{
                backgroundColor: '#21E7CA',
                height: 25,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <Text style={{fontSize: 13, lineHeight: 21, color: '#ffffff'}}>
                -50%
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            width: 260,
            fontSize: 10,
            lineHeight: 14,
            color: '#515151',
          }}>
          This is the product title that can be placed in two lines with limit
          of chars than dotted...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, lineHeight: 18, color: '#21E7CA'}}>
            49.90€
          </Text>
          <Text
            style={{
              fontSize: 9,
              lineHeight: 9,
              color: '#9C9C9C',
              marginLeft: 5,
              textDecorationLine: 'line-through',
            }}>
            120.50€
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', width: 250}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#575CFF',
              height: 30,
              width: 30,
              marginTop: -20,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrowright" color="#ffffff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({});
