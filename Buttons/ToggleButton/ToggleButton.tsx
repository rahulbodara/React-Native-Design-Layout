import {TextStyle, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from "./ToggleButton.scss";
import { Text } from '../..';
  
type PropsType = {
    selected?: boolean;
    text: string;
    textStyle?: TextStyle;
    onPress?: Function;
};
  
export const ToggleButton: React.FC<PropsType> = ({selected = false, text, textStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.toggleButton, selected ? styles.selected : {}]}
            activeOpacity={0.8}
            onPress={() => onPress && onPress()}
        >
            <Text style={[textStyle, selected ? {color: 'white'} : {}]}>{text}</Text>
        </TouchableOpacity>
    );
};
