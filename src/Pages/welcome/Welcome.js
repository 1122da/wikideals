import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('../../Assets/images/logo.png')} />
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '600',
              color: 'black',
            }}>
            wikideal
          </Text>
        </View>
        <View style={{marginTop: 24}}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              color: 'black',
            }}>
            L’APP PER TROVARE SCONTI E OFFERTE SU{'\n'} AMAZON E NEI MIGLIORI
            NEGOZI ONLINE
          </Text>
        </View>
      </View>
      <View
        style={{alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1}}>
        <ImageBackground
          source={require('../../Assets/images/Polygon.png')}
          style={{width: 380, height: 350, alignItems: 'flex-end'}}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 50,
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '500'}}>
              SE HAI UN “CODICE DI BENVENUTO
            </Text>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '500'}}>
              INSERISCILO QUI SOTTO
            </Text>
          </View>
          <View
            style={{
              width: 254,
              height: 41,
              backgroundColor: 'white',
              // alignSelf: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '400',
                }}>
                Inserisci codice di Benvenuto!
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                width: 18,
                borderRadius: 100,
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('bottomTab')}>
              <AntDesign name="arrowright" size={16} color={'white'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 184,
              height: 41,
              // backgroundColor:"blue",
              // alignSelf: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 40,
            }}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: '400',
                }}>
                CONTINUA SENZA CODICE
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 18,
                borderRadius: 100,
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="arrowright" size={16} color={'blue'} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
