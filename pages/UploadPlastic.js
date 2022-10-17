/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DropdownComponent from '../components/Dropdown';
import Input from '../components/Input';
import Button from '../components/Button';
import { getPlastics, retrieveData, getUser, createPlasticExchange, editPlasticExchange } from '../helper';

const UploadPlastic = ({ navigation }) => {

  const [plasts, setPlasts] = useState([])
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [plastic, setPlastic] = useState()
  let plasticId;
  const [weight, setWeight] = useState()

  useEffect(() => {
    async function getplasticFromServer ()  {
      const [_token, _] = await retrieveData('userToken');
      const [ exchangeId, exErr] = await retrieveData('exchangeId');

      if (exchangeId) {
        plasticId = exchangeId;
        console.log(exchangeId)
      }

      console.log(_token)
      if (_token) {
        const [data, err] = await getPlastics(_token)
        const [userD, userErr] = await await getUser(_token);
        setToken(_token);
        if (data && userD) {
          const _plastics = data.map(d => ({ label: d.type, value: d.type }))
          // console.log(_plastics)
          if(userD.type == 'USER' && (!userD.agent)) {
            alert('You have not been assigned an agent')
            navigation.navigate('Profile-Screen', { screen: 'Dashboard'})
          }
          setPlasts(_plastics);
          setUser(userD)
        }
      }
    }

    getplasticFromServer()
    
  }, [])


  const uploadPlastic = async () => {
    if (plasticId) {
      const [res, err] = await editPlasticExchange({
        _id: plasticId,
        type: plastic,
        weight: parseInt(weight)
      }, token)

      if (!err) {
        alert('Plastic updated!')
        navigation.navigate("Profile-Screen", { screen: 'Dashboard'})
      }
    }
    const [xchange, err] = await createPlasticExchange({
      type: plastic, 
      weight: parseInt(weight),
      customer: user._id,
      agent: user.agent._id
    }, token);

    if (xchange) {
      console.log(xchange)
      navigation.navigate("Profile-Screen", { screen: 'Dashboard'})
    }
  }


  return (
    <View style={styles.container}>
      <View>
        <Input
          defaultV={weight}
          handleChange={setWeight}
          label="Weight"
          placeholder="800"
        />

        <Text style={styles.text}>Weight</Text>
        { plasts && (<DropdownComponent data={plasts} setValue={setPlastic} value={plastic} />) }
        { user && user.type == 'USER' && (!user.agent) ?<Text></Text> : <Button 
            label="UploadPlastic" 
            onPressHandler={() => uploadPlastic()}
          />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    width: 300,
    borderColor: '#333',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontFamily: "Lato-Bold",
  },
});


export default UploadPlastic;