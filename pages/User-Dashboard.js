import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import TransactionComponent from "../components/Transaction-Component";
import Card from "../components/Card";
// import 

const UserDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello Name</Text>
      <Card />
      <Card />
      <TransactionComponent />
      <View>
        <Button
          title="Create Plastic"
          onPress={() => navigation.navigate('Upload-Plastic')}
        />
      </View>
    </View>
  )
}

export default UserDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#efef'
  }
})