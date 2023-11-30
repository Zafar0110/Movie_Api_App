import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import UserAcountScreen from './src/Screen/UserAcountScreen';
import DetailScreen from './src/Screen/DetailScreen';
import TabNavigator from './ios/TabNavigator/TabNavigator';
import IntroScreen from './src/Screen/IntroScreen';
import LoginScreen from './src/Screen/LoginScreen';
import SingUpScreen from './src/Screen/SingUpScreen';
import SeatBookingScreen from './src/Screen/SeatBookingScreen';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();


const App = () => {
  useEffect(() => { 
    SplashScreen.hide();
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="introscreen"
          component={IntroScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SingUpScreen"
          component={SingUpScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={DetailScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SeatBooking"
          component={SeatBookingScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  
  );
};

export default App;