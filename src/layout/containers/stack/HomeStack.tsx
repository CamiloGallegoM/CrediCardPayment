import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackScreenComponent, TransactionStackScreenComponent } from "../../general";

const Stack = createNativeStackNavigator();

export function HomeStack () {
    return(
        <Stack.Navigator>
            {HomeStackScreenComponent}
            {TransactionStackScreenComponent}
        </Stack.Navigator>
    );
};