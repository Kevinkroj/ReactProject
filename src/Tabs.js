import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage, {HomeScreen} from './HomePage';
import News from './News';
import Account from './Account';
import {TabActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default Tabs;
