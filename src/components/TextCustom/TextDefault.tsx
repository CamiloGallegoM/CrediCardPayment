import { FC } from "react";
import { TextProps, Text as TextDefault, StyleSheet } from "react-native";

export const Text:FC<TextProps> = props => {
    return (
        <TextDefault {...props} style={[styles.baseStyle, props.style]}  >
            {props.children}
        </TextDefault>
    );
};

const styles = StyleSheet.create({
    baseStyle :{
        color: 'black'
    },
})