import {View, ViewStyle} from 'react-native';
import React, { useState } from 'react';
import styles from "./ButtonsGroup.scss";
import {Text} from '../../';
import { TouchableOpacity } from 'react-native-gesture-handler';
  
type PropsType = {
    options: string[];
    selected: string;
    onSelect: Function;
    containerStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
};
  
export const ButtonsGroup: React.FC<PropsType> = ({options, selected, onSelect, containerStyle, buttonStyle}) => {
    return (
        <View style={[styles.buttonGroupContainer, containerStyle]}>
            {options.map((option, index) => (
                <View style={styles.buttonContainer} key={index}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            styles.button,
                            buttonStyle,
                            selected === option ? styles.buttonSelected : {}
                        ]}
                        onPress={() => onSelect(option)}
                    >
                        <Text
                            bold={selected === option}
                            style={[selected === option ? styles.buttonSelectedText : {}, styles.buttonText]}
                        >{option}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};
