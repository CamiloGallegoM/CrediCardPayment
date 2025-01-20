import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteNameNavigation } from "./routes/routes";
import HomeScreenComponent from "./screens/Home/HomeScreen";
import TransactionScreenComponent from "./screens/Transactions/TransactionScreen";
import { CartScreenComponent } from "./screens/Cart/CartScreen";


const Stack = createNativeStackNavigator();


export const CartStackScreenComponent =
    <Stack.Screen  
        name={RouteNameNavigation.CartNameScreen}
        options={{
            headerShadowVisible:false,
        }}
        component={CartScreenComponent} 
    />

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