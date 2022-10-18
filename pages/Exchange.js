import React, { useState, useEffect} from "react";
import { StyleSheet, View } from "react-native";
import HeaderText from "../components/Header-Text";
import Button from "../components/Button";
import PlasticExchangeCard from "../components/Plastic-Exchange";
import { getUser, retrieveData, getPlastic, saveItem } from "../helper";

const PlasticExchange = ({  route, navigation }) => {

  async function editPlastic(id) {
    await saveItem('exchangeId', id);
    navigation.push('Edit-Screen', { screen: 'Upload-Plastic' });
  }

  const [user, setUser] = useState();
  const [exchange, setExchange] = useState();

  const { id } = route.params;
  // console.log(id)

  useEffect(() => {
    const getData = async () => {
      const [token, _] = await retrieveData('userToken');
      const [_user, err] = await getUser(token);
      if (!err) {
        setUser(_user);
        // console.log(_user)
        const [_exchange, excErr] = await getPlastic(token, id)
        if (!excErr) {
          setExchange(_exchange.plastic)
          // console.log(_exchange)
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
      <View style={styles.innerContainer}>

        <PlasticExchangeCard
          date={exchange?.createdAt}
          status={exchange?.status}
          weight={exchange?.weight}
          type={exchange?.type}
          navigation={navigation}
          agentId={ user?.type === 'USER'? exchange?.agent?._id: null}
          userId={ user?.type === 'AGENT'? exchange?.customer?._id: null}
        />

        { 
          user && user.type == 'AGENT' && (
            <Button 
              label="Edit Plastic"
              onPressHandler={() => editPlastic(exchange?._id) }
            /> 
          )
        }
      </View>
    </View>
  )
}

export default PlasticExchange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginTop: 60
  },
  textContainer: {
    marginLeft: 20
  },
})