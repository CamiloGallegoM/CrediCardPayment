import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props{
    navigation:any
}

const  HomeScreenComponent:React.FC<Props>=(props)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity   onPress={()=>props.navigation.navigate('Transactions')}>
            <Text>Navigate home </Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreenComponent;