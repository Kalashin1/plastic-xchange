import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import ProfileCard from "../components/Profile-Card";
import BankCard from "../components/Bank-Info";
import HeaderText from "../components/Header-Text";
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
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <HeaderText text="profile" />
        </View>
        <TouchableOpacity>
          <ProfileCard 
            email={user?.email} 
            name={user?.name} 
            username={user?.username}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <HeaderText text="Bank details" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Edit-Screen', { screen: 'Update-Bank'})}>
          <BankCard
            accountNo={user?.bankInfo?.accountNo}
            bank={user?.bankInfo?.bank}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <HeaderText text="Address" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Edit-Screen', { screen: 'Update-Address' })}>
          <AddressCard 
            country={user?.location?.country}
            state={user?.location?.state}
            zip={user?.location?.zip}
            street={user?.location?.street}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  textContainer: {
    marginLeft: 20
  },
})