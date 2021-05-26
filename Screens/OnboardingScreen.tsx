import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
// import { Slider, Center, Box, NativeBaseProvider } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomer, selectCustomerTags, selectToken, updateCustomerThunk } from '../../Features/Customer';
import { ICustomer, ITag } from '../../Features/Shared/SharedModels';
import { CustomerBasicValidation, CustomerBirthValidation, CustomerTagsSelection, CustomerOTPValidation } from './Container';
import { onBoardingStyle } from './Container';
import { OnBoardingTabs } from '../../Containers';
import { ROUTES } from '../../AppRoutes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BasicButton } from '../../Components';

enum StagesName {
    OTPValidation = 1,
    BasicValidation = 2,
    BirthValidation = 3,
    TagsSelection = 4
}

export const OnBoardingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [stage, setStage] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    let customer: ICustomer | null = useSelector(selectCustomer);
    const token: string | null = useSelector(selectToken);
    const tags: ITag[] = useSelector(selectCustomerTags);


    const onStageFinished = (type: string, data?: any) => {
        switch (type) {
            case "BasicValidation":
                setFirstName(data.firstName)
                setLastName(data.lastName)
                break;
            case "BirthValidation":
                setBirthday(data)
                break;
            case "SetStage":
                setStage(data.stage);
                break;
            case "TagsSelection":
                const chosenTags = tags.filter(tag => tag.chosen == true)
                customer = {
                    firstName,
                    lastName,
                    birthDate: birthday,
                    phone: customer?.phone,
                    availableMemberPoints: customer?.availableMemberPoints,
                    customerFavoriteTags: chosenTags,
                }
                dispatch(updateCustomerThunk({
                    token,
                    customer
                }))
                navigation.replace(ROUTES.DRAWER)
                break;
        }
    }


    const generateStage = () => {
        switch (stage) {
            case StagesName.OTPValidation:
                return (
                    <CustomerOTPValidation
                        onStageFinished={onStageFinished}
                    />
                );
            case StagesName.BasicValidation:
                return (
                    <CustomerBasicValidation
                        onStageFinished={onStageFinished}
                    />
                );
            case StagesName.BirthValidation:
                return (
                    <CustomerBirthValidation
                        onStageFinished={onStageFinished}
                    />
                );
            case StagesName.TagsSelection:
                return (
                    <CustomerTagsSelection
                        navigation={navigation}
                        onStageFinished={onStageFinished}
                    />
                );
            default:
                return (
                    <CustomerOTPValidation
                        onStageFinished={onStageFinished}
                    />
                );
        }
    }

    return (

        <SafeAreaView style={onBoardingStyle.container} edges={['top']}>
            <ScrollView style={onBoardingStyle.content} contentContainerStyle={onBoardingStyle.scrollView} bounces={false}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1 }}
                >
                    <OnBoardingTabs size={4} stage={stage} />
                    <View style={onBoardingStyle.stageContent}>

                        {generateStage()}
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>

    )
}