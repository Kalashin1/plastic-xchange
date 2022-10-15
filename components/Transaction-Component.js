import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color5, formatDate, formatter } from "../helper";

const TransactionComponent = ({ viewExchange, platType, weight, amount, date, status }) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => viewExchange(200)}>
        <View style={styles.rowWrapper}>
            <View style={styles.tableRow}>
              <Text style={styles.text}>{ platType }</Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}>N { formatter.format(amount) }</Text>
            </View>
            <View style={styles.tableRow}>
            <Text style={styles.text}>{ weight } Kg</Text>
            <Text style={styles.text}>{ formatDate(date)}</Text>
            <Text style={styles.text}>{ status }</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TransactionComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    justifyContent: "space-between",
    marginVertical: 1,
  },
  rowWrapper: {
    borderRadius: 10,
    backgroundColor: color5,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  text: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 14,
    fontWeight: 'bold',
    fontSize: 16
  }
})