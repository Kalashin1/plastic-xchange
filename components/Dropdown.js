/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import { View, StyleSheet } from 'react-native';
import { color1, color3, color5 } from '../helper';


const DropdownComponent = ({ data, value, setValue }) => {
  const [isFocus, setIsFocus] = useState(false);
 
  return (
    <View style={SelectStyles.container}>
    <Dropdown
      // eslint-disable-next-line react-native/no-inline-styles
      style={[SelectStyles.dropdown, isFocus && {borderColor: color5 }]}
      placeholderStyle={SelectStyles.placeholderStyle}
      selectedTextStyle={SelectStyles.selectedTextStyle}
      inputSearchStyle={SelectStyles.inputSearchStyle}
      iconStyle={SelectStyles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  </View>
  )
}


const SelectStyles = StyleSheet.create({
  container: {
    margin: 10,
    width: 300,
  },
  dropdown: {
    height: 50,
    borderColor: color5,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 8,
    backgroundColor: color1,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#fff',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownComponent;