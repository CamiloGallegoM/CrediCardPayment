import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackScreenComponent, TransactionStackScreenComponent } from "../../general";

const Stack = createNativeStackNavigator();

export function TransactionStack () {
    return(
        <Stack.Navigator>
            {TransactionStackScreenComponent}
            {HomeStackScreenComponent}
        </Stack.Navigator>
    );
};