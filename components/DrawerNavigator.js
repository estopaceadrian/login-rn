import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/Welcome';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Welcome" component={Welcome} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
