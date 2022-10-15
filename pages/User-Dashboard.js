import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import TransactionComponent from "../components/Transaction-Component";
import Card from "../components/Card";
import HeaderText from "../components/Header-Text";
import { getUser, retrieveData, getUserExchanges } from "../helper";

const UserDashboard = ({ navigation }) => {
  const [user, setUser] = useState();
  const [exchanges, setExchanges] = useState();

  const viewExchange = (id) => {
    navigation.navigate("Plastic-Exchange", { id });
  }

  useEffect(() => {
    const getData = async () => {
      const [token, _] = await retrieveData('userToken');
      const [_user, err] = await getUser(token);
      if (!err) {
        setUser(_user);
        // console.log(_user)
        const [_exchanges, excErr] = await getUserExchanges(token, _user.username)
        if (!excErr) {
          console.log(_exchanges[0])
          setExchanges(_exchanges)
          // console.log(_exchanges)
        }
      }
    }

    getData()
  }, [])
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <HeaderText text={`Hello ${user?.name}`} />
        </View>
        <Card 
          header="Total Earnings"
          text={`N ${user?.balance}`} 
          headerTwo="Kilogram"
          textTwo={200}
        />
        <Card
          header="Place Holder"
          text="Val"
          headerTwo="Place Holder"
          textTwo="some other value"
        
        />

        <View style={styles.textContainer}>
          <HeaderText text="Your Recent Transactions" />
        </View>

        { exchanges && exchanges.map((v, i) => (
          <TransactionComponent
            amount={v.price}
            viewExchange={viewExchange}
            weight={v.weight}
            date={v.createdAt}
            platType={v.type}
            status={v.status}
            key={i}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default UserDashboard;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff'
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