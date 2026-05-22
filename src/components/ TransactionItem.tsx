import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Transaction } from '../types/Transaction';

interface Props {
  transaction: Transaction;
  onPress: () => void;
}

const TransactionItem: React.FC<Props> = ({ transaction, onPress }) => {
  const amountColor = transaction.amount < 0 ? 'red' : 'green';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.name}>{transaction.recipientName}</Text>
        <Text style={styles.transfer}>{transaction.transferName}</Text>
        <Text style={styles.date}>
          {new Date(transaction.transferDate).toLocaleDateString()}
        </Text>
      </View>
      <Text style={[styles.amount, { color: amountColor }]}>
        {transaction.amount.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  transfer: { color: '#555' },
  date: { fontSize: 12, color: '#888' },
  amount: { fontWeight: 'bold', fontSize: 16 },
});

export default TransactionItem;
