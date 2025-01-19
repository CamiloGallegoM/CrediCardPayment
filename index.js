/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };
TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };

const RootApp = () =>{
    return(
        <Provider store={store} >
            <SafeAreaProvider>
                <App/>
            </SafeAreaProvider>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => RootApp);
