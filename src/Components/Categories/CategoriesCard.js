import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import images from '../../Assets/images';

const CategoriesCard = ({title, image}) => {
  return (
    <ImageBackground
      source={image}
      style={{height: 90, width: 90, marginTop: 10, marginRight: 10}}>
      <View style={{flex: 1, margin: 10, justifyContent: 'flex-end'}}>
        <Text
          style={{
            fontSize: 13,
            lineHeight: 18,
            fontWeight: '600',
            color: '#ffffff',
          }}>
          {title}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({});
