import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/registration/SignUpScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Provider } from 'react-redux';
import store  from './redux/store'
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Dashboard from './screens/dashboard/Dashboard';
import MyContest from './screens/myContest/MyContest';
import Wallet from './screens/wallet/Wallet';
import MoreItems from './screens/moreItems/MoreItems';
import SignInScreen from './screens/login/SignInScreen';
import ContestListScreen from './screens/myContest/ContestListScreen';
import QRCodePayment from './screens/wallet/qrCodePayment';
import { colors, verticalScale, scale } from "./utils"




const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: scale(280)
                },
                headerShown: false,
            }} initialRouteName="BottomTab"  >
            <Drawer.Screen name="BottomTab" component={BottomTabNavigator} options={{
                headerShown: false
            }} />
        </Drawer.Navigator>
    );
}


const BottomTabNavigator = () => {
    const theme = useSelector(state => state.theme)

    return (
        <Tab.Navigator initialRouteName='Dashboard'
            tabBarColor={colors.black}
            shifting={true}
            activeColor={colors.primary_blue}
            inactiveColor={colors.greyColour}
            barStyle={{ backgroundColor: theme.colors.background_primary }}
            screenOptions={{ tabStyle: { borderTopWidth: 0, headerShown: false, }, }} >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarLabel: 'Home',
                tabBarStyle: { borderTopWidth: 0, height: (Platform.OS === 'ios') ? verticalScale(84) : verticalScale(54), },
                tabBarIcon: ({ focused }) => {
                    return (
                        <FontAwesome name="home" color={focused ? colors.primary_blue : colors.greyColour} size={verticalScale(20)} />
                    )
                }
            }} />
            <Tab.Screen name="MyContest" component={MyContest} options={{
                tabBarLabel: 'My Contest',
                tabBarStyle: { borderTopWidth: 0, height: (Platform.OS === 'ios') ? verticalScale(84) : verticalScale(54), },
                tabBarIcon: ({ focused }) => {
                    return (
                        <Entypo name="medal" color={focused ? colors.primary_blue : colors.greyColour} size={verticalScale(20)} />
                    )
                }
            }} />
            <Tab.Screen name="Wallet" component={Wallet} options={{
                tabBarLabel: 'Wallet',
                tabBarStyle: { borderTopWidth: 0, height: (Platform.OS === 'ios') ? verticalScale(84) : verticalScale(54), },
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialIcon name="account-balance-wallet" color={focused ? colors.primary_blue : colors.greyColour} size={verticalScale(18)} />
                    )
                }
            }} />
            <Tab.Screen name="More" component={MoreItems} options={{
                tabBarLabel: 'More',
                tabBarStyle: { borderTopWidth: 0, height: (Platform.OS === 'ios') ? verticalScale(84) : verticalScale(54), },
                tabBarIcon: ({ focused }) => {
                    return (
                        <AntDesign name="appstore1" color={focused ? colors.primary_blue : colors.greyColour} size={verticalScale(20)} />
                    )
                }
            }} />

        </Tab.Navigator>
    );
}

const App = () => {
    return (

        <Provider store={store}>
             <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ animation: 'slide_from_right', }} >
            <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignupScreen" component={SignUpScreen} options={{ headerShown: false }} />  
            <Stack.Screen name="Signin" component={SignInScreen} options={{ headerShown: false }} />  
            <Stack.Screen name="ContestListScreen" component={ContestListScreen} options={{headerShown:false}}/>
            <Stack.Screen name="QRCodePayment" component={QRCodePayment} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
        </Provider>


    );
}

export default App;