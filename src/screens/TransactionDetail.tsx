import React from 'react';
import { View, Text, Button, StyleSheet, Share } from 'react-native';
import { Transaction } from '../types/Transaction';

const TransactionDetail: React.FC<any> = ({ route }) => {
  const { transaction } = route.params as { transaction: Transaction };

  const shareDetails = async () => {
    await Share.share({
      message: `Transaction ${transaction.refId}\nRecipient: ${transaction.recipientName}\nAmount: ${transaction.amount}`,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item}>Ref ID: {transaction.refId}</Text>
      <Text style={styles.item}>Date: {new Date(transaction.transferDate).toLocaleString()}</Text>
      <Text style={styles.item}>Recipient: {transaction.recipientName}</Text>
      <Text style={styles.item}>Transfer: {transaction.transferName}</Text>
      <Text style={styles.item}>Amount: {transaction.amount.toFixed(2)}</Text>
      <Button title="Share" onPress={shareDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: { fontSize: 16, marginBottom: 8 },
});

export default TransactionDetail;
