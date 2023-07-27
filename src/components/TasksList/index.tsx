import {FlatList, View} from 'react-native';

import React from 'react';
import TaskView from '../TaskView';

const TasksList = () => {
  const DATA = [
    {
      id: 1,
      title: 'Task one',
      completed: false,
    },
    {
      id: 2,
      title: 'Task two',
      completed: false,
    },
    {
      id: 3,
      title: 'Task three',
      completed: false,
    },
    {
      id: 4,
      title: 'Task four',
      completed: false,
    },
    {
      id: 5,
      title: 'Task five',
      completed: false,
    },
  ];

  interface Item {
    id: number;
    title: string;
    completed: boolean;
  }

  const _renderItem = ({item}: {item: Item}) => {
    return (
      <TaskView id={item.id} taskName={item.title} completed={item.completed} />
    );
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TasksList;
