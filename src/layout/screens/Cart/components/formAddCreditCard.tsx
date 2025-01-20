import React, { useState } from "react";
import { View, StyleSheet, Button, Alert, Text, TextStyle, ViewStyle } from "react-native";
import { InputComponent } from "../../../../components/Inputs/InputComponent";
import ColorTheme from "../../../../constants/colors/theme";
import { TouchableOpacityCustom } from "../../../../components/Touchable/TouchableCustom";

interface FormValues {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
}

const AddCreditCardForm: React.FC = () => {
  const [form, setForm] = useState<FormValues>({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validateForm = () => {  };

  const handleInputChange = (field: keyof FormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleAddCreditCard = () => {
    console.log("Add credit card");
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Agregar Tarjeta de Crédito</Text>

        <InputComponent
            label="Número de Tarjeta"
            inputProps={{
                placeholder: "1234 5678 9012 3456",
                keyboardType: "numeric",
                maxLength: 16,
                value: form.cardNumber,
                onChangeText: (value) => handleInputChange("cardNumber", value),
            }}
        />

        <InputComponent
            label="Fecha de Expiración"
            inputProps={{
                placeholder: "MM/AA",
                maxLength: 5,
                value: form.expirationDate,
                onChangeText: (value) => handleInputChange("expirationDate", value),
            }}
        />
        <InputComponent
            label="CVV"
            inputProps={{
                placeholder: "123",
                keyboardType: "numeric",
                maxLength: 4,
                value: form.cvv,
                onChangeText: (value) => handleInputChange("cvv", value),
            }}
        />
        <InputComponent
            label="Nombre del Titular"
            inputProps={{
                placeholder: "Nombre en la tarjeta",
                value: form.cardHolderName,
                onChangeText: (value) => handleInputChange("cardHolderName", value),
            }}
        />
        <TouchableOpacityCustom  
            label="Agregar tarjeta"
            touchableProps={{
                onPress: handleAddCreditCard,
                activeOpacity: 0.7,
            }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    backgroundColor: ColorTheme.light.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign:'center'
  },
  errorText: {
    fontSize: 12,
    color: ColorTheme.light.error,
    marginTop: 5,
    marginLeft: 5,
  },
  errorIcon: {
    color: ColorTheme.light.error,
    fontSize: 16,
    marginLeft: 5,
  },
  inputError: {
    borderColor: ColorTheme.light.error,
  },
});

export default AddCreditCardForm;
