import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// const MyDrawer = ({state, navigation, description}) => {
//   const handleNavigation = (name) => {
//        navigation.dispatch(CommonActions.navigate(name));
//   };
//   return (
//     <View>
//       {state.routes.map((item, index) => {
//         return (
//           <TouchableOpacity
//           style={{padding: 15, borderBottomColor: '#000', borderBottomWidth: 1 }}
//             key={index}
//             onPress={() => handleNavigation(item.name)}>
//             <Text >{item.name}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

const MyDrawer = props => {
    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}
export default MyDrawer;
