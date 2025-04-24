import React from "react";
import { View, Image, StatusBar, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { colors, fullHeight, fullWidth, scale, scaleFont, verticalScale } from '../../utils';

import LinearGradient from 'react-native-linear-gradient';


const QRCodePayment = (props) => {

    const logo = require("../../assets/images/QRCode.jpeg");


    return (
        <View style={{ flex: 1, backgroundColor: colors.primary_blue, justifyContent: 'center', alignItems: 'center' }}>

            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(360),
                    height: verticalScale(80),
                    alignSelf: 'center',
                }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Ionicon name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>QRCode</Text>
                    <Text style={styles.headerText}></Text>

                </View>
            </LinearGradient>
            <View style={{ flex: 3, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: colors.QRCode_bg_Color,width: fullWidth }}>

                <View style={{ alignSelf: 'center', justifyContent: 'space-evenly', alignItems: 'space-evenly', }}>
                    <Image source={logo} style={{ width: fullWidth, height: fullHeight, resizeMode: 'contain' }} />
                </View>

            </View>


        </View>
    );

}

export default QRCodePayment;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f8fc',
    },
    header: {
      marginTop: verticalScale(35),
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignItems: 'center',

    },
    timer: {
      color: '#fff',
      fontSize: 12,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 4,
      elevation: 3,
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      fontSize: 14,
      color: '#888',
    },
    prize: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      marginTop: 5,
    },
    filledText: {
      fontSize: 12,
      color: '#666',
      marginTop: 8,
    },
    subText: {
      fontSize: 13,
      color: '#444',
    },
    joinBtn: {
      backgroundColor: '#3D6EF7',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    joinText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });