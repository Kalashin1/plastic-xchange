import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>kinanee@yahoo.com</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Username</Text>
        <Text style={styles.text}>kalashin1</Text>
      </View>
    </View>
  )
}

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 15,
    margin: 20,
    padding: 20,
    backgroundColor: "darkgreen",
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
})