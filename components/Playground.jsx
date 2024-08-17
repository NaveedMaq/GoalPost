import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PlayGround = () => {
  return (
    <View
      style={{
        // padding: 50,
        margin: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        borderWidth: 1,
        borderColor: 'black',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>

      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    marginTop: 50,
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  red: {
    color: 'red',
  },
});
