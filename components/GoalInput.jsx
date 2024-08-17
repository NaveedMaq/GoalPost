import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const GoalInput = (props) => {
  const [entertedGoalText, setEntertedGoalText] = useState('');

  function addGoalHandler() {
    props.onAddGoal(entertedGoalText);
    setEntertedGoalText('');
  }

  function goalInputHandler(enteredText) {
    setEntertedGoalText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="What's your goal?"
        onChangeText={goalInputHandler}
        value={entertedGoalText}
      />
      <Button color="#5e0acc" onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
});
