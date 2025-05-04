import React, { useState,useEffect } from 'react';
import { Alert, Keyboard, StatusBar, Text, TouchableOpacity, View,ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppHeader from '../../components/AppHeader';
import { colors, constants, scale, scaleFont, verticalScale } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../redux/actions';


const SignUpScreen = (props) => {
   
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [emailId, setEmailId] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState('');
    const {user,loading,isAuthenticated,error} = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const handleRegistration = () => {
        console.log("--------handleRegistration-");
        if (!firstName || !lastName || !emailId || !phoneNo || !password) {
            setErrors('Please fill in all fields.');
            return;
        }

        if (!firstName) {
            setErrors("Please enter first name");
            return
        }

        if (!lastName) {
            setErrors("Please enter last name");
            return
        }

        if (!emailId) {
            setErrors("Please enter email id");
            return
        }

        if (!phoneNo) {
            setErrors("Please enter phone number");
            return
        }

        if (!password) {
            setErrors("Password is required");
            return
        }

        if (firstName.length < 4){
            setErrors("First name can't be less than 4 characters");
            return
        } 

        if (firstName.length > 20){
            setErrors("First name can't be more than 30 characters");
            return
        }


        if (lastName.length < 1){
            setErrors("Last name can't be less than 1 characters");
            return
        } 

        if (lastName.length > 20){
            setErrors("Last name can't be more than 30 characters");
            return
        }


        // Basic email validation
        const emailRegex = /^[a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailId)) {
            setErrors('Invalid email address or E-mail is not valid');
            return;
        }

        // Basic phone number validation (assuming 10 digits)
        if (!/^([0-9]{10})$/.test(phoneNo)) {
            setErrors('Please enter a valid 10-digit phone number.');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrors("Password must contain: Minimum 8 characters atleast 1 UpperCase Alphabet, " + "1 LowerCase Alphabet, 1 Number and 1 Special Character");
            return;
        }

        setErrors(''); // Clear any previous errors

        dispatch(createAccount(firstName,lastName,emailId,phoneNo,password));
    }

        useEffect(() => {
        // Check if user exists and has a status after login attempt
        if (isAuthenticated) {
            props.navigation.navigate('Dashboard');
        }
    }, [isAuthenticated, props.navigation]);

    useEffect(() => {
        if (error) {
            // Show an alert when an error occurs
            Alert.alert('Error', error.message || 'An unknown error occurred.');
        }

        if(errors){
            Alert.alert('Error', errors);
        }
    }, [error,errors]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />
                <View style={{ marginTop: verticalScale(30) }}>

                    <AppHeader heading="" navigation={() => props.navigation.goBack()} showicon={true} />
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={{ color: colors.black, fontSize: scaleFont(18), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20), marginTop: verticalScale(10) }}>Create an Account</Text>

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="First Name"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, marginTop: verticalScale(20) }}
                        keyboardType="ascii-capable"
                        autoCapitalize='none'
                        onChangeText={setFirstName}
                        value={firstName}
                        maxLength={100}
                    />

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Last Name"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, marginTop: verticalScale(5) }}
                        keyboardType="ascii-capable"
                        autoCapitalize='none'
                        onChangeText={setLastName}
                        value={lastName}
                        maxLength={100}
                    />

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Email Id"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black,marginTop: verticalScale(5) }}
                        keyboardType="email-address"
                        onChangeText={setEmailId}
                        value={emailId}
                        maxLength={100}
                    />

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Phone No"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black,marginTop: verticalScale(5) }}
                        keyboardType="number-pad"
                        autoCapitalize='none'
                        onChangeText={setPhoneNo}
                        value={phoneNo}
                        maxLength={10}
                    />

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Create Password"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black,marginTop: verticalScale(5) }}
                        keyboardType='default'
                        onChangeText={setPassword}
                        value={password}
                        maxLength={20}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity disabled={loading} onPress={() => handleRegistration()} style={{ backgroundColor: colors.primary_blue, height: verticalScale(50), width: verticalScale(50), marginLeft: scale(20), borderRadius: verticalScale(100), marginTop: verticalScale(24), justifyContent: 'center', alignItems: 'center' }}>
                    

                      {loading ? (
                            <ActivityIndicator color={colors.white} size="small" />
                        ) : (
                            <Icon
                                name="arrow-right"
                                size={verticalScale(26)}
                                color={colors.white}
                            />
                        )}
                    </TouchableOpacity>

                    <View style={{ position: 'relative', top: verticalScale(50), alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', color: colors.black, fontSize: scaleFont(14), marginTop: verticalScale(14), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Already Have an Account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signin")} style={{ justifyContent: 'center', alignItems: "center", marginTop: verticalScale(14) }} ><Text style={{ alignSelf: 'center', color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}>Sign In </Text></TouchableOpacity>
                    </View>
                    {/* 
                    <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicy')} ><Text style={{ alignSelf: 'center', color: colors.primary_red, fontSize: scaleFont(12), marginTop: verticalScale(4), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Terms & Conditions</Text>
                    </TouchableOpacity> */}
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default SignUpScreen;