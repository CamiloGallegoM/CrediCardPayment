import React, { useEffect } from 'react';
import {SafeAreaView,StatusBar,useColorScheme} from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/layout/containers/stack/HomeStack';
import { generateFakeProducts } from './src/utils/generateProducts';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};

//   useEffect(() => {
//     const dataProducts = generateFakeProducts(10);
//   }, []);
  return (
    <NavigationContainer  >
        <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
            <HomeStack/> 
        </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
