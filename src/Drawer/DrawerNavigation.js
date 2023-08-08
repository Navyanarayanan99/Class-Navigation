import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeDrawer from './HomeDrawer';
import NotificationD from './NotificationD';
import SettingsD from './SettingsD';

const MyDrawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer independent={true}>
    <MyDrawer.Navigator>
      <MyDrawer.Screen name="HomeDrawer" component={HomeDrawer} />
      <MyDrawer.Screen name="NotificationD" component={NotificationD} />
      <MyDrawer.Screen name="SettingsD" component={SettingsD} />
    </MyDrawer.Navigator>
  </NavigationContainer>
  )
}

export default DrawerNavigation


// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// // import Home from "./src/Projects/Taskitms/Home";
// // import Mylistings from "./src/Projects/Taskitms/Mylisting";
// // import Forums from "./src/Projects/Taskitms/Forums";
// // import Settings from "./src/Projects/Taskitms/Settings";
// // import Logout from "./src/Projects/Taskitms/Logout";
// // import Profile from "./src/Projects/Taskitms/Profile";
// // import Help from "./src/Projects/Taskitms/Help";
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import HomeB from "../BottomTabNavigation/HomeB";
// import ProfileC from "../CommonActions/ProfileC";
// import Wishlist from "../CombinedNavigation/Wishlist";
// import ChatB from "../BottomTabNavigation/ChatB";
// import SettingsB from "../BottomTabNavigation/SettingsB";
// import NotificationB from "../BottomTabNavigation/NotificationB";
// import SettingsM from "../MaterialBottomTab/SettingsM";





// const Drawer=createDrawerNavigator();

// const DrawerNavigation=()=>{
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator  options={{
//                 header:<Fontisto name='profile' size={15} color={'red'}/>
//             }}>
//                 <Drawer.Screen name="Home" component={HomeB} options=
//                 {{ drawerIcon: ({focused, size}) => (
//                   <Ionicons
//                      name="md-home"
//                      size={size}
//                      color={focused ? '#7cc' : '#ccc'}
//                   />
//                ),
//             }}
//       />
               
//                 <Drawer.Screen name="Profile" component={ProfileC} options=
//                 {{tabBarIcon:()=> (<Fontisto name='male' size={15} color={'grey'}/>),}}/>
                
//                 <Drawer.Screen name="My Listing" component={Wishlist} options=
//                 {{tabBarIcon:()=> (<Entypo name='list' size={15} color={'grey'}/>),}}/>
                
//                 <Drawer.Screen name="Forums" component={ChatB} options=
//                 {{tabBarIcon:()=> (<Entypo name='chat' size={15} color={'grey'}/>),}}/>
                
//                 <Drawer.Screen name="Settings" component={SettingsB} options=
//                 {{tabBarIcon:()=> (<Ionicons name='settings-sharp' size={15} color={'grey'}/>),}}/>
                
//                 <Drawer.Screen name="Help" component={NotificationB}options=
//                 {{tabBarIcon:()=> (<Entypo name='help' size={15} color={'grey'}/>),}}/>
                
//                 <Drawer.Screen name="Logout" component={SettingsM}options=
//                 {{tabBarIcon:()=> (<MaterialCommunityIcons name='logout' size={15} color={'grey'}/>),}}/>
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }
// export default DrawerNavigation;