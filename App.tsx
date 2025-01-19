import React, { useCallback, useEffect } from 'react';
import {SafeAreaView,StatusBar,useColorScheme} from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/layout/containers/stack/HomeStack';
import { generateFakeProducts } from './src/utils/generateProducts';
import BottomNavigatorContainer from './src/layout/containers/BottomNavigator';
import { useAppDispatch } from './src/hooks/reduxHook';
import { setProducts } from './src/slices/products/productSlice';


function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};
    const dispatch = useAppDispatch();

    const fetchProducts = useCallback(() => {
        const dataProducts = generateFakeProducts(20);
        dispatch(setProducts(dataProducts));
    }, []);

    useEffect(() => {
        fetchProducts();
    }, []);


  return (
    <NavigationContainer  >
        <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
            <BottomNavigatorContainer/> 
        </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
