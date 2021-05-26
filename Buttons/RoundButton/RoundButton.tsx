import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './RoundButton.modules.scss';

export const RoundButton = (props) => {
  return (
    <View style={styles.centerView}>
      <TouchableOpacity onPress={props.navigation}>
        <Text style={styles.centerButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
