import React, { useEffect } from 'react';
import { Image, ImageBackground, StatusBar, View } from 'react-native';
import { colors, fullWidth, verticalScale } from '../utils';
import { useSelector,useDispatch } from 'react-redux';
import { checkAuthStatus } from '../redux/actions';



const SplashScreen = (props) => {

    const {isAuthenticated} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const logo = require("../assets/images/dreamatch_logo.png");

    useEffect(()=>{
        dispatch(checkAuthStatus())
    },[]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isAuthenticated) {
                props.navigation.replace('Dashboard');
            } else {
            props.navigation.navigate('LoginScreen')
            }
        }, 3000)
        return () => clearTimeout(timer);
    }, [isAuthenticated])

    return (
        <View style={{ flex: 1, backgroundColor: colors.primary_blue, justifyContent: 'center', alignItems: 'center' }}>

            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />
            <ImageBackground  style={{ backgroundColor: colors.white,width: fullWidth, height: verticalScale(720), alignSelf: 'center', }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={logo} style={{width:150,height:170,resizeMode:'contain'}}/>
                    </View>

                </View>

            </ImageBackground>


        </View>
    );
}

export default SplashScreen;