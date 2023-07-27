import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import NewTaskModal from '../NewTaskModal';
import styles from './styles';

const Header = () => {
  const [newTaskModalVisible, setNewTaskModalVisible] = useState(false);
  const createNewTask = () => {
    console.log('New task created');
    setNewTaskModalVisible(true);
  };

  return (
    <>
      <NewTaskModal
        visible={newTaskModalVisible}
        setVisible={setNewTaskModalVisible}
        closeModal={() => {
          setNewTaskModalVisible(!newTaskModalVisible);
        }}
      />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>TaskTracker</Text>
        <TouchableOpacity style={styles.newTaskButton} onPress={createNewTask}>
          <Icon name="plus-square-o" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
