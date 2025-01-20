import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartStackScreenComponent, HomeStackScreenComponent, TransactionStackScreenComponent } from "../../general";

const Stack = createNativeStackNavigator();

export function HomeStack () {
    return(
        <Stack.Navigator>
            {HomeStackScreenComponent}
            {TransactionStackScreenComponent}
            {CartStackScreenComponent}
        </Stack.Navigator>
    );
};