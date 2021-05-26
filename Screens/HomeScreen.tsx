import { Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavBarLayout } from '../../Components/Layouts';
import styles from "./HomeScreen.modules.scss";
import relaxIcon from '../../Assets/category-relax.png';
import productItem from '../../Assets/product-screenshot.png';
import { HorizontalGallery } from '../../Components/Gallery/HorizontalGallery';
import { CarouselGallery } from '../../Components/Gallery/CarouselGallery';
import { Container, Content, H3, View } from 'native-base';
import { Banner, BasicButton, BasicTextHeader, Greeting, Modal } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesThunk, productKeywordsThunk } from '../../Features/Catalog/CatalogThunks';
import { getMainDataThunk, selectCustomerBenefits, selectToken } from '../../Features/Customer';
import { selectCategories } from '../../Features/Catalog/CatalogSelectors';
import { IProduct, IProductCategory } from '../../Features/Catalog/CatalogModels';

const orderItems: any[] = [
    {
        name: 'Product 1',
        catalogNumber: '1',
        image: productItem,
        category: relaxIcon,
        isFavorite: false,
    },
    {
        name: 'Product 2',
        catalogNumber: '2',
        image: productItem,
        category: relaxIcon,
        isFavorite: false,
    },
    {
        name: 'Product 3',
        catalogNumber: '3',
        image: productItem,
        category: relaxIcon,
        isFavorite: true,
    },
    {
        name: 'Product 4',
        catalogNumber: '4',
        image: productItem,
        category: relaxIcon,
        isFavorite: false,
    },
];

const banner = require('../../Assets/banner.png');

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState<boolean>(false);
    const token: string = useSelector(selectToken);
    const customerBenefits = useSelector(selectCustomerBenefits);
    const categories: IProductCategory[] | null = useSelector(selectCategories);
    let products: IProduct[] = [];

    categories?.forEach(category => products = products.concat(category.products));

    useEffect(() => {
        dispatch(
            categoriesThunk({ token }),
        );
        dispatch(
            getMainDataThunk(token),
        );
        dispatch(
            productKeywordsThunk({ token }),
        );
    }, []);

    return (
        <NavBarLayout showFloatingMenu={!showModal} modal={{ showModal, setShowModal }}>
            <View style={styles.content}>
                <Greeting popModal={setShowModal} showModal={showModal} />
                <Text style={styles.sectionHeader}>הזמנת לאחרונה</Text>
                <HorizontalGallery products={products} />
                <Banner source={banner} />
                <CarouselGallery products={orderItems} />
            </View>
        </NavBarLayout>
    );
};
