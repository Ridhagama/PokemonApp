import {
  StyleSheet,
  Text,
  View,
  TextInput,
  // TouchableOpacity,
  // Alert
} from 'react-native';
import React from 'react';
// import auth from '@react-native-firebase/auth';

const Register = () => {
  // const [email, setEmail] = useState('');
  // const [Password, setPassword] = useState('');
  // const [Username, setName] = useState('');
  // const onSubmit = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(email, Password)
  //     .then(() => {
  //       Alert.alert('success')
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          // value={email}
          // onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholder="Enter Email ID"
          placeholderTextColor={'black'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          // value={Password}
          // onChangeText={text => setPassword(text)}
          style={styles.input2}
          placeholder="Enter Password"
          placeholderTextColor={'black'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          // onChangeText={text => setName(text)}
          // value={Username}
          style={styles.input3}
          placeholder="Enter Username"
          placeholderTextColor={'black'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.LoginStyle}>
          {/* <TouchableOpacity onPress={() => onSubmit()}> */}
            <View style={styles.Login}>
              <Text style={{fontWeight: 'bold'}}>Register</Text>
            </View>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

// text

export default Register;

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
  input3: {
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
