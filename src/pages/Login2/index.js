import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import Input from '../../component/input';
import * as Yup from 'yup';
import Button from '../../component/button';
import auth from '@react-native-firebase/auth';

const Login2 = ({navigation}) => {
    const loginValidationSchema = Yup.object({
      email: Yup.string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
      password: Yup.string()
        .min(6, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    });
  const handleSubmit = ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login success')
        // analytics().logEvent('Login', {
        //   with: 'Login Firebase Auth',
        // });
        // analytics().setUserProperty('Login type', 'Login Firebase Auth');
        navigation.navigate('DashboardScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleSubmit(values)}
        validationSchema = {loginValidationSchema}
        >
        {({handleChange, handleSubmit, errors, isValid, values}) => (
          <SafeAreaView>
            <Text
              style={{
                marginTop: 90,
                alignSelf: 'center',
                marginBottom: 70,
                fontWeight: 'bold',
                color: 'green',
                fontSize: 18,
              }}>
              Welcome To PokebagApp !
            </Text>
            <Input
              placeholder={'Enter Email'}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder={'Enter Password'}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button
              title={'Login'}
              onPress={handleSubmit}
              disabled={!isValid}
            />
            <Text style={{alignSelf: 'center'}}>Dont have account?</Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                color: "green",
                fontWeight: 'bold',
              }}
              onPress={() => navigation.navigate('register')}>
              <Text> Register </Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default Login2;

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
