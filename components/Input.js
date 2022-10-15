import { View, Text, TextInput, StyleSheet } from "react-native";
import { color1 } from "../helper"

const Input = ({ 
  label, 
  defaultV, 
  handleChange, 
  placeholder, 
  isPassword, 
  showError,
  errorMessage, 
}) => {

  const styles = StyleSheet.create({
    input: {
      marginVertical: 5,
      borderRadius: 15,
      borderWidth: 2,
      backgroundColor: color1,
      width: 300,
      borderColor: showError ? 'red': '#333',
      paddingHorizontal: 20,
    },
    inputContainer: {
      margin: 8
    },
    text: {
      textAlign: 'left',
      marginVertical: 10,
      fontFamily: 'Lato-Bold',
      marginLeft: 10,
    },
    errorMessage: {
      color: 'red',
      marginLeft: 10,
      fontFamily: 'Lato-Regular',
    },
  })

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input} 
        placeholder={placeholder}
        defaultValue={defaultV}
        secureTextEntry={isPassword}
        onChangeText={nv => handleChange(nv)}
      />
      { errorMessage && showError && (<Text style={styles.errorMessage}>{ errorMessage }</Text>) }
    </View>
  )
}

export default Input;

