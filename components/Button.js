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
    paddingHorizontal: 40,
    marginVertical: 10,
    marginTop: 30,
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    textAlign: 'center',
    color: color5,
    fontFamily: 'Lato-Black',
    borderRadius: 18,
    fontSize: 18,
    borderWidth: 2,
    borderColor: color5,
    paddingHorizontal: 20
  },
})