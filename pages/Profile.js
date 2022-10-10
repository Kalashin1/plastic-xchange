import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileCard from "../components/Profile-Card";
import BankCard from "../components/Bank-Info";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Update Profile</Text>
      <ProfileCard />
      <Text>Update Bank Info</Text>
      <BankCard />
    </View>
  )
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#efef'
  }
})