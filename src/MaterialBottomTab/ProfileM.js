import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileM = ({navigation, route}) => {
  const handleNav = () => {
     navigation.navigate('DrawerNav');
  }
  return (
    <View style={{justifyContent:'center', alignItems: 'center'}}>
      <Button title='Go to drawer' onPress={handleNav}/>
    </View>
  )
}

export default ProfileM