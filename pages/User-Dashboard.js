import React, { useState, useEffect} from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import TransactionComponent from "../components/Transaction-Component";
import Card from "../components/Card";
import HeaderText from "../components/Header-Text";
import { getUser, retrieveData, getUserExchanges, formatter } from "../helper";

const UserDashboard = ({ navigation }) => {
  const [user, setUser] = useState();
  const [exchanges, setExchanges] = useState();
  const [weight, setWeight] = useState()

  const viewExchange = (id) => {
    navigation.navigate("Edit-Screen", { params: { id }, screen: "Plastic-Exchange" });
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
          // console.log(_exchanges[0])
          setExchanges(_exchanges)
          const weight = _exchanges.map(e => e.weight).reduce((prev, current) => prev + current);
          setWeight(weight)
          // const weightTotal
          // console.log(_exchanges)
        }
      }
    }

    getData()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <HeaderText text={`Hello ${user?.name}`} />
      </View>
      <Card 
        header="Balance"
        text={user?.balance} 
        headerTwo="Kilograms Exchnaged"
        textTwo={`${weight && new Intl.NumberFormat().format(weight)} kg`}
      />
    
      <View style={styles.textContainer}>
        <HeaderText text="Your Recent Transactions" />
      </View>

      <FlatList 
        data={exchanges}
        keyExtractor={item => item._id}
        renderItem={({ item}) => (
          <TransactionComponent
            amount={item.price}
            viewExchange={viewExchange}
            weight={item.weight}
            date={item.createdAt}
            platType={item.type}
            status={item.status}
            id={item._id}
          />
        )}
      />

      {/* { exchanges && exchanges.map((item, i) => (
        
      ))} */}
    </View>
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