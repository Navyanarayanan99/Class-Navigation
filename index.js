/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PassingParams from './src/PassingParams';
import NavigationHook from './src/NavigationHooks';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/Drawer/DrawerNavigation';
import BottomTab from './src/BottomTabNavigation/BottomTab';
import CombinedScreen from './src/CombinedNavigation/CombinedScreen';
import MeterialBottomTab from './src/MaterialBottomTab/MeterialBottomTab';
import CommonAction from './src/CommonActions/CommonActions';
import DrawerActions from './src/DrawerAndTabActions/DrawerActions';
import CustomHeader from './src/CustomHeader/CustomHeader';
import CustomTabFooter from './src/CustomTabFooter/CustomTabFooter';
import CustomDrawer from './src/CustomDrawer/CustomDrawer';

AppRegistry.registerComponent(appName, () => CustomDrawer);
