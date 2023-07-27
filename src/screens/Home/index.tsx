import Header from '../../components/Header';
import React from 'react';
import TasksList from '../../components/TasksList';
import {View} from 'react-native';

const Home = () => {
  return (
    <View>
      <Header />
      <TasksList />
    </View>
  );
};

export default Home;
