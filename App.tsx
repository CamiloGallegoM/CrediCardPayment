import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,TouchableOpacity,useColorScheme,View} from 'react-native';
import { Colors, Header} from 'react-native/Libraries/NewAppScreen';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHook';
import { increment } from './src/slices/counter/counterSlice';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch()
  const handleIncrement = () => dispatch(increment())


  const counter = useAppSelector((state) => state.counter.value);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView  contentInsetAdjustmentBehavior="automatic"  style={backgroundStyle} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}  >
        <View style={{  backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>Configuración folders {counter} </Text>
        </View>
        <TouchableOpacity onPress={handleIncrement} style={{marginTop: 20}}>
          <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>incrementar </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
