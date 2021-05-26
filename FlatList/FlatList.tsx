import {FlatList as RNFlatList, FlatListProps, Platform, TextStyle, View} from 'react-native';
import React from 'react';
import styles from "./FlatList.scss";
  
export const FlatList: React.FC<FlatListProps<any>> = (props) => {
    const isAndroid: boolean = Platform.OS === 'android';
    
    return (
        <RNFlatList style={isAndroid ? styles.tagsFlatListAndroid : {}}
            data={isAndroid ? [...props?.data!].reverse() : props?.data}
            renderItem={props.renderItem}
            keyExtractor={props.keyExtractor}
            horizontal={props.horizontal}
            showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
        />
    );
};
