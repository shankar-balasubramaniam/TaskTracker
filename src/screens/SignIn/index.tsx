import {Pressable, Text, View} from 'react-native';

import React from 'react';
import {setUserInfo} from '../../rtk/slices/userSlice';
import styles from './styles';
import {useDispatch} from 'react-redux';

const user = {
  username: 'shankarb',
  email: 'shankarb3061997@gmail.com',
};

const SignIn = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={styles.signInBtn}
        onPress={() => {
          dispatch(setUserInfo(user));
        }}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
