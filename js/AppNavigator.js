import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Icon from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const HomeStack = createStackNavigator(
  { HomeScreen },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: 'aliceblue' }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Top Songs',
        tabBarIcon: ({ tintColor }) => (
          <Icon.MaterialIcons name="music-note" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Top Artists',
        tabBarIcon: ({ tintColor }) => (
          <Icon.MaterialIcons name="star" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'darkorange',
      style: {
        backgroundColor: 'aliceblue'
      }
    }
  }
);

export default createAppContainer(TabNavigator);
