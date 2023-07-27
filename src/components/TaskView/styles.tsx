import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingRight: 15,
    gap: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    margin: 5,
    borderRadius: 5,
  },
  taskName: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },
  deleteButton: {},
  deleteButtonText: {},
});

export default styles;
