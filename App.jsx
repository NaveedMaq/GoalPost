import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { GoalInput } from './components/GoalInput';
import { GoalList } from './components/GoalList';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [allGoals, setAllGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goal) {
    setAllGoals((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(goalId) {
    setAllGoals((goals) => [...goals.filter((g) => g.id !== goalId)]);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <GoalList allGoals={allGoals} onDeleteItem={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
