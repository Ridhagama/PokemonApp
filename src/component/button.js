import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Wrapper: {
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: 'green',
    width: 300,
    height: 40,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    margin: 4,
    paddingVertical: 3,
    textAlign: 'center',
  },
});
