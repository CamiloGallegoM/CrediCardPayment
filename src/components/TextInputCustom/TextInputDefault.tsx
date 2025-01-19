import React from "react";
import { TextInputProps, TextInput as TextInputDefault, StyleSheet } from "react-native";

export const TextInput:React.FC<TextInputProps> = props => {
    return (
        <TextInputDefault  style={[styles.baseStyle, props.style]} placeholderTextColor={'#727272'} {...props} />
    );
};

const styles = StyleSheet.create({
    baseStyle :{
        color:'black',
    },
});