import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          //   value={email}
          //   onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholder="Enter Email ID"
          placeholderTextColor={'black'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          //   value={email}
          //   onChangeText={text => setEmail(text)}
          style={styles.input2}
          placeholder="Enter Password"
          placeholderTextColor={'black'}
        />
        <View style={{alignItems: 'center'}}>
          <View style={styles.LoginStyle}>
            <View style={styles.Login}>
              <Text>Login</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Not Have Account? Register Here!</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    width: 390,
    height: 50,
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 220,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input2: {
    width: 390,
    height: 50,
    borderWidth: 2,
    borderRadius: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Login: {
    backgroundColor: '#019267',
    width: 390,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});
