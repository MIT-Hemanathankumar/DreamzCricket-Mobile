import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppStack from './AppStack';
import AuthStack from './AuthStack';


const Routes = (props) => {


    return (
        <NavigationContainer>
            {/* {true ? <AppStack /> : <AuthStack />} */}
            <AppStack/>
            <AuthStack/>
        </NavigationContainer>


    );
}

export default Routes;