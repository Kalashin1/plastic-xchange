import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileCard from "../components/Profile-Card";
import BankCard from "../components/Bank-Info";
import AddressCard from "../components/Address-Card";
import { getUser, retrieveData } from "../helper";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      const [token, ] = await retrieveData('userToken');
      console.log(token)
      const [_user, err] = await getUser(token);
      if (!err) {
        // console.log(_user);
        setUser(_user)
      } else {
        console.log(err)
      }
    }

    fetchUser();
  }, [])
  return (
    <View style={styles.container}>
      <Text>Update Profile</Text>
      <ProfileCard />
      <Text>Update Bank Info</Text>
      <BankCard />
      <Text>Update Address</Text>
      <AddressCard />
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