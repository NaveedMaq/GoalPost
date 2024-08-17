import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = (props) => {
  function onDeleteItem(id) {
    setTimeout(() => {
      props.onDeleteItem(id);
    }, 200);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    padding: 8,
    color: '#fff',
  },
});
