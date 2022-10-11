import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionComponent = ({}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.headerText}>Your Recent Transactions</Text>
      <View style={styles.rowWrapper}>
        <View style={styles.tableRow}>
          <Text style={styles.text}>PPI</Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>N 25</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.text}>4Kg</Text>
          <Text style={styles.text}>2/2/22</Text>
          <Text style={styles.text}>2/2/22</Text>
        </View>
      </View>
    </View>
  )
}

export default TransactionComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  rowWrapper: {
    borderRadius: 10,
    backgroundColor: 'darkgreen',
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