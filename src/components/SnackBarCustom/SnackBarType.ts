import { TextStyle, ViewStyle } from "react-native";

export interface SnackbarProps {
    message: string;
    actionText?: string;
    onActionPress?: () => void;
    duration?: number;
    position?: 'top' | 'bottom';
    containerStyle?: ViewStyle;
    messageStyle?: TextStyle;
    actionTextStyle?: TextStyle;
    backgroundColor?: string;
    textColor?: string;
    actionTextColor?: string;
}