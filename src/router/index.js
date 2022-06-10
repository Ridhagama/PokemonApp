import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen, Detail, Pokebag, Login2, register} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pokebag"
        component={Pokebag}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
