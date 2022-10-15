import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ProfileCard from "../components/Profile-Card";
import HeaderText from "../components/Header-Text";
import AddressCard from "../components/Address-Card";
import { getUserById, retrieveData } from "../helper";

const ProfileView = ({ navigation, route }) => {
  const [user, setUser] = useState();

  const { id } = route.params;
  
  useEffect(() => {
    const fetchUser = async () => {
      const [token, ] = await retrieveData('userToken');
      console.log(token)
      const [_user, err] = await getUserById(id);
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
      <View style={styles.textContainer}>
        <HeaderText text={`View ${user?.type} profile`} />
      </View>
      <View style={styles.innerContainer}>
        <ProfileCard 
          email={user?.email} 
          name={user?.name} 
          username={user?.username}
        />
        <View style={styles.textContainer}>
          <HeaderText text="Address" />
        </View>
        <AddressCard 
          country={user?.location?.country}
          state={user?.location?.state}
          zip={user?.location?.zip}
          street={user?.location?.street}
        />
      </View>
    </View>
  )
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    minHeight: 500
  },
  innerContainer: {
    marginTop: 30,
  },
  textContainer: {
    marginLeft: 20
  },
})