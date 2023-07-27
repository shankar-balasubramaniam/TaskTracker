import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const TaskView = ({
  id,
  taskName,
  completed,
}: {
  id: number;
  taskName: string;
  completed: boolean;
}) => {
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleDelete = () => {
    console.log('Delete pressed');
  };

  return (
    <View style={styles.container} id={id.toString()}>
      <CheckBox
        disabled={false}
        value={checked}
        onValueChange={toggleCheckbox}
      />
      <Text style={styles.taskName}>{taskName}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Icon name="trash-2" size={20} color="#F00" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskView;
