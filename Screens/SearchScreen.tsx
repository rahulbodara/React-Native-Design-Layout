import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text, SearchBox} from '../../Components';
import {FullScreenLayout} from '../../Components/Layouts';
import styles from "./SearchScreen.scss";
import { IProduct, IProductCategory, IProductIngredient } from '../../Features/Catalog/CatalogModels';
import { useSelector } from 'react-redux';
import { selectCategories, selectProductIngredients } from '../../Features/Catalog/CatalogSelectors';
import { useState } from 'react';
import { ROUTES } from '../../AppRoutes';
import { useNavigation } from '@react-navigation/native';

export const SearchScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, initialItemsTitle, initialItems, searchItems, originScreen } = route.params;
  const noDuplicates = initialItems.length > 0 ? searchItems?.filter(i1 => !initialItems?.find(i2 => i1.code === i2.code)) : searchItems;
  const [filteredResults, setFilteredResults] = useState<any[]>(noDuplicates || []);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeText = (value) => {
    if (noDuplicates) {
      setFilteredResults(noDuplicates.filter(ingredient => ingredient.name.startsWith(value)));
    }
    setIsSearching(value.length > 0);
    setSearchValue(value);
  }

  return (
    <FullScreenLayout backButton title={`${title}...`}>
        <View style={styles.content}>
            <SearchBox
              placeholder="בננה, מתוק, מרענן..."
              autoFocus
              onChangeText={handleChangeText}
            />
        </View>
        {isSearching &&
          <ScrollView style={styles.results} bounces={false} keyboardShouldPersistTaps='always'>
            <Text style={styles.resultTitle}>תוצאות מתאימות</Text>
            {filteredResults?.map(item => (
              <TouchableOpacity onPress={() => navigation.navigate(originScreen, { searchItem: item })}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultItemText}><Text style={styles.resultItemText} bold>{searchValue}</Text>{item.name.replace(searchValue, '')}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        }
        {!isSearching && initialItems.length > 0 &&
          <ScrollView style={styles.results} bounces={false} keyboardShouldPersistTaps='handled'>
            <Text style={styles.resultTitle}>מרכיבים ב-{initialItemsTitle}</Text>
            {initialItems?.map(item => (
              <TouchableOpacity onPress={() => navigation.navigate(originScreen, { searchItem: item })}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultItemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        }
    </FullScreenLayout>
  );
};
