import { FlatList, StyleSheet, View } from 'react-native';

import { GoalItem } from './GoalItem';

export const GoalList = (props) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={props.allGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});
