import { FC, ReactNode } from "react";
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { Text } from "../TextCustom/TextDefault";
import ColorTheme from "../../constants/colors/theme";

type Props = {
    label?:string
    touchableProps?: TouchableOpacityProps
    touchableStyle?: ViewStyle
    loading?:boolean
    textStyle?:TextStyle
    children?:ReactNode
    indicatorProps?:ActivityIndicatorProps
}

export const TouchableOpacityCustom: FC<Props> = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}  disabled={props.loading}  style={[style.touchableStyleCustom, {...props.touchableStyle}]} {...props.touchableProps} >
            {   props.loading? <ActivityIndicator {...props.indicatorProps}  />
                :
                props.children? props.children: <Text style={[style.textStyleCustom,{...props.textStyle}]} >{props.label}</Text>
            }
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    textStyleCustom:{
        textAlign:'center',
        fontSize:18, 
        color:ColorTheme.light.white
    },
    touchableStyleCustom:{
        padding:10,
        borderRadius:15,
        marginVertical:10,
        backgroundColor:ColorTheme.light.primary
    }
});