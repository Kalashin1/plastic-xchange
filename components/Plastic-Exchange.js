import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import { color1, color2, color5, formatDate } from "../helper";

const PlasticExchange = ({ 
  type,
  weight,
  date,
  status,
  agentId,
  userId, 
  navigation
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{ type }</Text>
        <Text style={styles.text}>{ weight } Kg</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{ formatDate(date) }</Text>
        <Text style={styles.text}>{ status }</Text>
      </View>
      <View>
      {
        userId && <Button
          label="View User"
          onPressHandler={() => navigation.navigate("Edit-Screen", {
            screen: "View-Profile",
            params: { id: userId }
          })}
        />
      }
      { agentId && <Button
          label="View Agent"
          onPressHandler={() => navigation.navigate("Edit-Screen", {
            params: { id: agentId },
            screen: "View-Profile",
          })}
        />
      }
        {/* <Text style={styles.text}>{ }</Text> */}
      </View> 
    </View>
  )
}

export default PlasticExchange;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 15,
    margin: 20,
    padding: 20,
    backgroundColor: color1,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: color5
  },
  textSmall: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: color5
  }
})