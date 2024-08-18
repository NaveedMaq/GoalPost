import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalButton}>
          <Button
            title="Add New Goal"
            color="#10b981"
            onPress={startAddGoalHandler}
          />
        </View>

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <GoalList allGoals={allGoals} onDeleteItem={deleteGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },

  addGoalButton: {
    marginHorizontal: 32,
    marginBottom: 16,
  },
});
