/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import DropdownComponent from '../components/Dropdown';
import { getPlastics, retrieveData, getUser, createPlasticExchange } from '../helper';

const UploadPlastic = ({ navigation }) => {

  const [plasts, setPlasts] = useState([])
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [plastic, setPlastic] = useState()
  const [weight, setWeight] = useState()

  useEffect(() => {
    async function getplasticFromServer ()  {
      const [_token, _] = await retrieveData('userToken');
      console.log(_token)
      if (_token) {
        const [data, err] = await getPlastics(_token)
        const [userD, userErr] = await await getUser(_token);
        setToken(_token);
        if (data && userD) {
          const _plastics = data.map(d => ({ label: d.type, value: d.type }))
          console.log(_plastics)
          setPlasts(_plastics);
          setUser(userD)
        }
      }
    }

    getplasticFromServer()
    
  }, [])


  const uploadPlastic = async () => {
    const [xchange, err] = await createPlasticExchange({
      type: plastic, 
      weight,
      customer: user._id,
      agent: user.agent._id
    }, token);

    if (xchange) {
      console.log(xchange)
      navigation.navigate('Dashboard')
    }
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Weight</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Plastic Weight"
          value={weight}
          onChangeText={v => setWeight(parseInt(v))}
         />

        <Text style={styles.text}>Weight</Text>
        { plasts && (<DropdownComponent data={plasts} setValue={setPlastic} value={plastic} />) }
        <Button title="UploadPlastic" onPress={() => uploadPlastic()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'maroon',
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
    fontWeight: 'b',
  },
});


export default UploadPlastic;