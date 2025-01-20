import { FC, ReactNode } from "react";
import { ActivityIndicator, StyleSheet, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import { TextInput } from "../TextInputCustom/TextInputDefault";
import { Text } from "../TextCustom/TextDefault";
import { Icon } from "@rneui/themed";
import { GlobalConstants } from "../../constants/generalConstants";

interface Props{
    containerStyle?: ViewStyle
    contentContainerStyle?: ViewStyle
    label?:string
    labelStyle?:TextStyle
    iconStart?:ReactNode
    iconEnd?:ReactNode
    iconError?:ReactNode
    inputProps?:TextInputProps
    loading?:boolean
}

export const InputComponent:FC<Props> = props =>{

    return (
        <View   style={props.containerStyle}>
            {props.label && <Text style={[{fontSize:10, color:'gray',paddingStart:5, marginBottom:5},props.labelStyle]}  >{props.label}</Text>}
            <View style={[style.container ,props.contentContainerStyle]}  >
                {props.iconStart}
                <TextInput 
                    style={{flex:1}}
                    {...props.inputProps}
                />
                {props.iconError}
                {props.loading?<ActivityIndicator/>:props.iconEnd}
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container:{
        width:'100%',
        borderRadius:GlobalConstants.RADIUS_BORDER,
        flexDirection:'row',
        paddingHorizontal:10,
        borderWidth:0.5,
        backgroundColor:'white',
        justifyContent:'space-around',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
});