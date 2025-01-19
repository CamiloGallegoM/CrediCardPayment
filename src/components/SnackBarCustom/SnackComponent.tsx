import  {FC, useState, useEffect } from "react";
import { View,  TouchableOpacity, StyleSheet } from 'react-native';
import { SnackbarProps } from "./SnackBarType";
import { Text } from "../TextCustom/TextDefault";



const Snackbar: FC<SnackbarProps> = ({
  message,
  actionText,
  onActionPress,
  duration = 3000,
  position = "bottom",
  containerStyle,
  messageStyle,
  actionTextStyle,
  backgroundColor,
  textColor,
  actionTextColor,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, duration]);

  return isVisible && (
    <View
      style={[
        styles.container,
        position === "top" ? styles.topContainer : styles.bottomContainer,
        containerStyle,
        { backgroundColor: backgroundColor },
      ]}
    >
      <Text style={[styles.messageText, messageStyle, { color: textColor }]}>
        {message}
      </Text>
      {actionText && (
        <TouchableOpacity onPress={onActionPress}>
          <Text  style={[ styles.actionText, actionTextStyle, { color: actionTextColor }]} >
            {actionText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
  },
  topContainer: {
    top: 15,
  },
  bottomContainer: {
    bottom: 15,
  },
  messageText: {
    fontSize: 16,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
  },
});

export default Snackbar;