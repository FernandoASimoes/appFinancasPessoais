import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthSteck = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthSteck.Navigator>

            <AuthSteck.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{headerShown: false}}
            />

            <AuthSteck.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{
                headerStyle:{
                    backgroundColor: '#333',
                    borderBottomWidth: 1,
                    borderBottomColor: '#5ebb46',
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}
            />

        </AuthSteck.Navigator>
    )
}

export default AuthRoutes;