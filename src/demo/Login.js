import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={require('../assets/splashscreen.jpg')} style={styles.loginScreenImage}> */}
        {/* <Image source={require('../assets/')} style={styles.loginScreenLogo} /> */}

        <TextInput
          style={styles.inputView}
          placeholder="Username"
          placeholderTextColor={'black'}></TextInput>
        <TextInput
          style={styles.inputView}
          inlineImageLeft="search_icon"
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}></TextInput>
        <TouchableHighlight style={styles.buttonView}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <View style={styles.signupView}>
          <Text style={styles.signupTouchableopacity}>New User?</Text>
          <TouchableOpacity
            underlaycolor="transparent"
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.signupTouchableopacity}>SignUp</Text>
          </TouchableOpacity>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textView: {
    fontSize: 18,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  loginScreenImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenLogo: {
    height: 130,
    width: 130,
    //align:'center',
    //animation:"zoomIn",
    //duration:'1500'
  },
  inputView: {
    height: 55,
    width: '90%',
    //backgroundColor:'red',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 25,
    paddingLeft: 20,
    borderRadius: 25,
  },
  buttonView: {
    width: '60%',
    height: 55,
    backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  signupView: {
    flexDirection: 'row',
    marginTop: 10,
    //backgroundColor:''
  },
  signupTouchableopacity: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
