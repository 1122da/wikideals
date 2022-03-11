import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesone5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Information from '../Pages/Information/Information';
import Spesa from '../Pages/Spesa/Spesa';
import Marachi from '../Pages/Marachi/Marachi';

const Tab = createBottomTabNavigator();

const MarchiTop = () => {
  return (
    <View>
      <Text>MarchiTop</Text>
    </View>
  );
};
const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#575CFF',
        // tabBarShowLabel: false,
        tabBarStyle: {
          height: 49,
        },
      }}>
      <Tab.Screen
        name="OFFERTE"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="tags" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MARCHI TOP"
        component={Marachi}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesone5 name="crown" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SEARCH"
        component={Search}
        options={{
          // tabBarShowLabel: false,
          tabBarIconStyle: {
            position: 'relative',
            bottom: 20,
            // paddingBottom: -30,
            height: 50,
            width: 50,
            backgroundColor: '#575CFF',
            borderRadius: 100,
          },
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" size={20} color={'#ffffff'} />
          ),
        }}
      />
      <Tab.Screen
        name="SPESA ONLINE"
        component={Spesa}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="shopping-basket" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AIUTO"
        component={Information}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesone5 name="info-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
