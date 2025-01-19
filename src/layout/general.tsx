import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNameNavigation } from "./routes/routes";
import HomeScreenComponent from "./screens/Home/HomeScreen";
import TransactionScreenComponent from "./screens/Transactions/TransactionScreen";


const Stack = createNativeStackNavigator();

export const TransactionStackScreenComponent = 
    <Stack.Screen  
        name={RouteNameNavigation.TransactionNameScreen}
        options={{
            headerShown:false
        }}
        component={TransactionScreenComponent} 
    />

export const HomeStackScreenComponent = 
    <Stack.Screen  
        name={RouteNameNavigation.HomeNameScreen}
        options={{
            headerShown:false
        }}
        component={HomeScreenComponent} 
    />