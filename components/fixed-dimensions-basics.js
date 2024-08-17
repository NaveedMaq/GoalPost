import { Image, Text, View } from 'react-native';

export const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />

      <View
        style={{
          backgroundColor: 'skyblue',
          width: 100,
          height: 100,
        }}
      />

      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue',
        }}
      />

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'red',
        }}
      />

      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: 'https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg',
        }}
      />
    </View>
  );
};
