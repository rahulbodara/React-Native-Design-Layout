import { Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { styles } from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const UnderlineButton = ({ extraStyles = {}, onPress, title, ...rest }) => {
    const textStyle = styles.underLineText;
    const btnStyle = styles.underLineBtn;
    return (
        <TouchableOpacity
            style={[btnStyle, extraStyles]}
            onPress={onPress}
            {...rest}
        ><Text style={[textStyle, extraStyles]}>{title}</Text></TouchableOpacity>
    );
};