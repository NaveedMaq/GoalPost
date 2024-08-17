import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { GoalInput } from './components/GoalInput';
import { GoalList } from './components/GoalList';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  function addGoalHandler(goal) {
    setAllGoals((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalId) {
    setAllGoals((goals) => [...goals.filter((g) => g.id !== goalId)]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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
