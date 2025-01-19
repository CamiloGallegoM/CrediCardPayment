import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,TouchableOpacity,useColorScheme,View} from 'react-native';
import { Colors, Header} from 'react-native/Libraries/NewAppScreen';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHook';
import { increment } from './src/slices/counter/counterSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenComponent from './src/layout/screens/Home/HomeScreen';
import TransactionScreenComponent from './src/layout/screens/Transactions/TransactionScreen';





const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreenComponent} />
      <Stack.Screen name="Transactions" component={TransactionScreenComponent} />
    </Stack.Navigator>
  );
}



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch()
  const handleIncrement = () => dispatch(increment())


  const counter = useAppSelector((state) => state.counter.value);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer  >
        <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
            <RootStack/> 
            
        </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
