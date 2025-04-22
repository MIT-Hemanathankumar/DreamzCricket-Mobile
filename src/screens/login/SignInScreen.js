import React, { useState,useEffect } from 'react';
import { Alert, Keyboard, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppHeader from '../../components/AppHeader';
import { colors, constants, scale, scaleFont, verticalScale } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/actions';
import Loader from '../../components/Loader';

const SignInScreen = (props) => {

 
    const [email, setemail] = useState();
    const [phone, setphone] = useState();
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();
    const {user,loading,error} = useSelector(state => state.auth)
    const handleLogin = () => {
        if (!email || !phone) { // Renamed from phone
            setErrors('Please enter both email and password.');
            return;
        }

        if (!email) {
            setErrors("Please enter email id");
            return
        }

        // Basic email validation
        const emailRegex = /^[a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setErrors('Invalid email address or E-mail is not valid');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
        if (!passwordRegex.test(phone)) {
            setErrors("Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
            return;
        }
        setErrors(''); // Clear any previous errors
        console.log(phone);
        dispatch(loginRequest(email,phone));
    }

    useEffect(() => {
        // Check if user exists and has a status after login attempt
        if (user != null && user.status != null) {
            // Navigate to Dashboard as a side effect
            props.navigation.navigate('Dashboard');
            // Optional: Reset user/status in Redux state after navigation
            // to prevent re-navigation on subsequent renders if needed.
        }
    }, [user, props.navigation]);

    useEffect(() => {
        if (error) {
            // Show an alert when an error occurs
            Alert.alert('Login Failed', error || 'An unknown error occurred.');
            // Optional: Dispatch an action to clear the error from Redux state
            // dispatch(clearLoginError());
        }

        if(errors){
            Alert.alert('Login Validation Error', errors);
        }
    }, [error,errors]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />
                            <Loader loading={loading} />

                <View style={{ marginTop: verticalScale(30) }}>


                    <AppHeader heading="" navigation={() => props.navigation.goBack()} showicon={true} />
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={{ color: colors.black, fontSize: scaleFont(18), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20), marginTop: verticalScale(10) }}>Login to continue</Text>

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Email"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, marginTop: verticalScale(20) }}
                        keyboardType="default"
                        autoCapitalize='none'
                        onChangeText={setemail}
                        value={email}
                        maxLength={50}
                    />



                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Password"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black,marginTop: verticalScale(5) }}
                        keyboardType='default'
                        onChangeText={setphone}
                        value={phone}
                        maxLength={15}
                        secureTextEntry={true}
                    />




                    <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: colors.primary_blue, height: verticalScale(50), width: verticalScale(50), marginLeft: scale(20), borderRadius: verticalScale(100), marginTop: verticalScale(24), justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name="arrow-right"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>

                    <View style={{ position: 'absolute', bottom: verticalScale(20), alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignupScreen")} style={{ justifyContent: 'center', alignItems: "center", marginTop: verticalScale(14) }} ><Text style={{ alignSelf: 'center', color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}>Sign Up   </Text></TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", marginTop: verticalScale(14) }} ><Text style={{ alignSelf: 'center', color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}> Forgot Password </Text></TouchableOpacity>
                    </View>
                    {/* 
                    <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicy')} ><Text style={{ alignSelf: 'center', color: colors.primary_red, fontSize: scaleFont(12), marginTop: verticalScale(4), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Terms & Conditions</Text>
                    </TouchableOpacity> */}
                    {/* {user != null && user.status != null ? props.navigation.navigate('Dashboard') : ''} */}

                </View>
            </TouchableOpacity>

        </View>
    );
}

export default SignInScreen;