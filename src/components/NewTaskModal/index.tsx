import {Modal, Pressable, Text, TextInput, View} from 'react-native';

import React from 'react';
import styles from './styles';

interface NewTaskModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  closeModal: () => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({
  visible,
  setVisible,
  closeModal,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.newTaskHeading}>Create new task</Text>
          <TextInput style={styles.newTaskInput} />
          <Pressable style={styles.saveButton} onPress={closeModal}>
            <Text style={styles.saveButtonText}>Save task</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default NewTaskModal;
