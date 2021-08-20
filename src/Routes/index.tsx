import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Map } from '../screens/Map';
import { Welcome } from "../screens/Welcome";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {

  return (
    <Navigator >
      <Screen
        name="Welcome"
        component={Welcome}
      />
      <Screen
        name="Home"
        component={Map}
      />
    </Navigator>
  )
}