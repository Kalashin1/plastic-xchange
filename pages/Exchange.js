import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";
import { getUser, retrieveData, getUserExchanges } from "../helper";

const PlasticExchange = ({  route, navigation }) => {
  const [user, setUser] = useState();
  const [exchanges, setExchanges] = useState();

  const { id } = route.params;
  console.log(id)

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
    </View>
  )
}

export default PlasticExchange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#efef'
  }
})