import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, Touchable } from "react-native";
import TransactionComponent from "../components/Transaction-Component";
import Card from "../components/Card";
import { getUser, retrieveData, getUserExchanges } from "../helper";

const UserDashboard = ({ navigation }) => {
  const [user, setUser] = useState();
  const [exchanges, setExchanges] = useState();

  useEffect(() => {
    const getData = async () => {
      const [token, _] = await retrieveData('userToken');
      const [_user, err] = await getUser(token);
      if (!err) {
        setUser(_user);
        // console.log(_user)
        const [_exchanges, excErr] = await getUserExchanges(token, _user.username)
        if (!excErr) {
          setExchanges(_exchanges)
          // console.log(_exchanges)
        }
      }
    }

    getData()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Hello Name</Text>
      <Card />
      <Card />
      <TransactionComponent />
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