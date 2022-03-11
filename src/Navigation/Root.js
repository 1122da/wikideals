import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import React from 'react';
import Welcome from '../Pages/welcome/Welcome';
import Home from '../Pages/Home/Home';
import BottomTab from './BottomTab';
import CategoryView from '../Pages/CategoryView/CategoryView';
const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.welcome} component={Welcome} />
        <Stack.Screen name={Routes.bottom_tab} component={BottomTab} />
        <Stack.Screen name={Routes.home} component={Home} />
        <Stack.Screen name={Routes.category_view} component={CategoryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
