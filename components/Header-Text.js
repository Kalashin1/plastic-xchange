import { View, Text, StyleSheet } from "react-native";
import { color5 } from "../helper";

const HeaderText = ({ text }) => {
  return (
    <View>
      <Text style={styles.headerText}>
        { text }
      </Text>
    </View>
  )
}

export default HeaderText


const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    color: color5,
  }
})