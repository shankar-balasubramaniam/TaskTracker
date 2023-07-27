import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  modalContent: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  newTaskHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  newTaskInput: {
    borderWidth: 1,
    width: Dimensions.get('window').width - 50,
    paddingHorizontal: 5,
    textAlignVertical: 'center',
    fontSize: 20,
    height: 40,
  },
  saveButton: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#47E5BC',
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});

export default styles;
