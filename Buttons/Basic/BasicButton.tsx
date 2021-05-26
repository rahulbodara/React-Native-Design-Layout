import { TouchableHighlight } from 'react-native';
import React from 'react';
import { styles } from './Styles';
import { Text } from '../..';

export const BasicButton = ({ clickable = true, extraStyles = {}, onPress, title, ...rest }) => {
  const textStyle = clickable ? styles.clickableText : styles.unclickableText
  const btnStyle = clickable ? styles.clickableBtn : styles.unclickableBtn
  return (
    <TouchableHighlight
      style={[btnStyle, extraStyles]}
      onPress={onPress}
      {...rest}
    ><Text style={textStyle}>{title}</Text></TouchableHighlight>
  );
};