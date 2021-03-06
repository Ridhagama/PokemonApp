import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({
  onChangeText,
  value,
  placeholder,
  errors,
  selectTextOnFocus,
}) => {
  if (placeholder === 'Enter Email') {
    return (
      <View
        style={{
          marginVertical: 5,
          height: 60,
          marginHorizontal: 10,
        }}>
        <TextInput
          style={styles.InputContainer}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black"
          selectTextOnFocus={selectTextOnFocus}
        />
        {/* <Text style={{ color: 'red' }}>{errors}</Text> */}
      </View>
    );
  }
  if (placeholder === 'Enter Password') {
    return (
      <View
        style={{
          marginVertical: 5,
          height: 60,
          marginHorizontal: 10,
        }}>
        <TextInput
          style={styles.InputContainer}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black"
          selectTextOnFocus={selectTextOnFocus}
          secureTextEntry
        />
        {/* <Text style={{ color: 'red'}}>{errors}</Text> */}
      </View>
    );
  }
  if (placeholder === 'Enter FullName') {
    return (
      <View
        style={{
          marginVertical: 5,
          height: 60,
          marginHorizontal: 10,
        }}>
        <TextInput
          style={styles.InputContainer}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black"
          selectTextOnFocus={selectTextOnFocus}
        />
        {/* <Text style={{ color: 'red'}}>{errors}</Text> */}
      </View>
    );
  }
};

export default Input;

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.2,
    color: 'black',
    fontSize: 15,
  },
});
