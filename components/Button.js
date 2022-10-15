import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color5 } from "../helper";

const Button = ({ label, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.registerButtonContainer}>
        <Text style={styles.registerButton}>{ label }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  registerButtonContainer : {
    justifyContent: 'center',
    paddingHorizontal: 60,
    marginVertical: 10,
    marginTop: 30,
  },
  registerButton: {
    backgroundColor: color5,
    paddingVertical: 16,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 18,
    paddingHorizontal: 20
  },
})