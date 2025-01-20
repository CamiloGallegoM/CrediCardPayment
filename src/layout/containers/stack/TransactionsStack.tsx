import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartStackScreenComponent, HomeStackScreenComponent, TransactionStackScreenComponent } from "../../general";

const Stack = createNativeStackNavigator();

export function TransactionStack () {
    return(
        <Stack.Navigator>
            {TransactionStackScreenComponent}
            {HomeStackScreenComponent}
            {CartStackScreenComponent}
        </Stack.Navigator>
    );
};