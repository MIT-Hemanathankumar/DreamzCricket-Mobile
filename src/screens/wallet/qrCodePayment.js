import React from "react";
import { View, ImageBackground, Image } from 'react-native';

const QRCodePayment = () => {

    return(
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

export default QRCodePayment;