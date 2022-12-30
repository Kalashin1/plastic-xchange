import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import TransactionComponent from "../components/Transaction-Component";
import Card from "../components/Card";
import HeaderText from "../components/Header-Text";
import { getUser, retrieveData, getUserExchanges, getAgentExchanges } from "../helper";
import Icon from 'react-native-vector-icons/FontAwesome'

const UserDashboard = ({ navigation }) => {
  const [loading, setLoading] = useState(true)

  const [user, setUser] = useState();
  const [exchanges, setExchanges] = useState();
  const [weight, setWeight] = useState()

  const viewExchange = (id) => {
    navigation.navigate("Edit-Screen", { params: { id }, screen: "Plastic-Exchange" });
  }

  async function updateExchanges(userType, token, username){
    setLoading(true)
    if (userType == 'USER') {
      const [_exchanges, excErr] = await getUserExchanges(token, username)
      if (!excErr) {
        // console.log(_exchanges[0])
        setExchanges(_exchanges)
        if (_exchanges.lenght > 1) {
          const weight = _exchanges.map(e => e.weight).reduce((prev, current) => prev + current);
          setWeight(weight)
        }
        // const weightTotal
        // console.log(_exchanges)
      }
      setLoading(false)
    } else if (userType == 'AGENT') {
      const [_exchanges, excErr] = await getAgentExchanges(token, username)
      if (!excErr) {
        // console.log(_exchanges[0])
        setExchanges(_exchanges)
        if (_exchanges.lenght > 1) {
          const weight = _exchanges.map(e => e.weight).reduce((prev, current) => prev + current);
          setWeight(weight)
        }
        // const weightTotal
        // console.log(_exchanges)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    const getData = async () => {
      const [token, _] = await retrieveData('userToken');
      const [_user, err] = await getUser(token);
      if (!err) {
        setUser(_user);
        // console.log(_user)
        await updateExchanges(_user.type, token, _user.username);
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
        textTwo={`${weight ? new Intl.NumberFormat().format(weight): 0 } kg`}
      />
    
      <View style={styles.textContainer}>
        <HeaderText text="Your Recent Transactions" />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {updateExchanges(user.type, token, user.username)}}>
            <Icon name='rotate-right' size={25} />
          </TouchableOpacity>
        </View>
      </View>

      { loading ? <Text style={styles.Loading}>Loading...</Text> :(<FlatList 
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
      />)}

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
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  iconContainer: {
    marginVertical: 10
  },
  Loading: {
    fontWeight: '300',
    fontSize: 20,
    margin: 30
  }
})