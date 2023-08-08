// //commonaction - goback
// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import { CommonActions } from '@react-navigation/native';

// const NotificationC = ({navigation, route}) => {
//   const handleNavigate = () => {
//     navigation.dispatch(CommonActions.goBack());
//   }
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20}}>{route.name}</Text>
//       <TouchableOpacity
//       onPress={handleNavigate}
//         style={{
//           backgroundColor: 'blue',
//           padding: 15,
//           margin: 10,
//           borderRadius: 10,
//         }}>
//         <Text style={{fontSize: 15, color: '#fff'}}>
//         goback
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default NotificationC;


//commonaction - goback
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';

const NotificationC = ({navigation, route}) => {
  const handleNavigate = () => {
    navigation.dispatch(CommonActions.setParams({notify: 'Hello guyss'}));
  }
  console.warn(route);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{route.name}</Text>
      <Text style={{fontSize: 20}}>{route?.params?.notify ?? ''}</Text>
      <TouchableOpacity
      onPress={handleNavigate}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>
        set params
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationC;


// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import { CommonActions } from '@react-navigation/native';

// const NotificationC = ({navigation, route}) => {
//   const handleNavigate = () => {
//     navigation.dispatch(CommonActions.navigate('Settings'));
//   }
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20}}>{route.name}</Text>
//       <TouchableOpacity
//       onPress={handleNavigate}
//         style={{
//           backgroundColor: 'blue',
//           padding: 15,
//           margin: 10,
//           borderRadius: 10,
//         }}>
//         <Text style={{fontSize: 15, color: '#fff'}}>
//           Navigate to notifications
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default NotificationC;