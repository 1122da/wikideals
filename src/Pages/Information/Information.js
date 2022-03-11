import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Information = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image source={require('../../Assets/images/logo.jpg')} />
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              lineHeight: 18,
              color: '#000000',
              marginBottom: 20,
            }}>
            DOMANDE E RISPOSTE
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 80,
          backgroundColor: '#ffffff',
          margin: 10,
          borderRadius: 8,
        }}>
        <View style={{marginHorizontal: 10, marginTop: 10}}>
          <Text style={{fontSize: 10, lineHeight: 14, color: '#515151'}}>
            QUESTION: This is the text of the question in the accordion type.
          </Text>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 14,
              color: '#515151',
              marginTop: 15,
            }}>
            When user clic on this item the answer will be expanded like in the
            next example.
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', margin: 10}}>
          <FontAwesome5 name="long-arrow-alt-down" color="#575CFF" />
        </View>
      </View>
      <View
        style={{
          height: 139,
          backgroundColor: '#ffffff',
          margin: 10,
          borderRadius: 8,
        }}>
        <View style={{marginHorizontal: 10, marginTop: 10}}>
          <Text style={{fontSize: 10, lineHeight: 14, color: '#515151'}}>
            QUESTION: This is the text of the question in the accordion type.
          </Text>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 14,
              color: '#515151',
              marginTop: 15,
            }}>
            ANSWER: This is the text of the answer. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', margin: 10}}>
          <FontAwesome5 name="long-arrow-alt-down" color="#575CFF" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Information;

const styles = StyleSheet.create({});
