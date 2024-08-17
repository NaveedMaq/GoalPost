import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { PlayGround } from './playground';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [goalInput, setGoalInput] = useState('');

  function goalInputHandler(enteredText) {
    setGoalInput(enteredText);
  }

  function addGoalHandler() {
    setAllGoals((goals) => [
      ...goals,
      { text: goalInput, id: Math.random().toString() },
    ]);
    // setGoalInput('');
  }

  // return <PlayGround />;

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What's your goal?"
          onChangeText={goalInputHandler}
          // value={goalInput}
        />
        <Button color="#5e0acc" onPress={addGoalHandler} title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={allGoals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

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
  },

  goalsContainer: {
    flex: 5,
  },
});
