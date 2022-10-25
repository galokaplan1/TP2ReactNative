import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../Screens/Home'
import { NavigationContainer } from '@react-navigation/native';

import Hora from '..Screens/Hora';
 
        
        const Stack = createNativeStackNavigator()
        
        const MainStack =()=>{
           
        return(
        <NavigationContainer>
            <Stack.Navigator>
                
        
                <Stack.Screen
        
                    options={{headerShown: false, }} 
                    name='Home'
                    component={ Home }
        
                />
                <Stack.Screen
                    name='Hora'
                    component={ Hora }
                />
                 
        
            </Stack.Navigator>
        </NavigationContainer>
        
        
        )
        
        }
        
        export default MainStack
      
    
  
  
  
  

