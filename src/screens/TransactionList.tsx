import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import TransactionItem from '../components/ TransactionItem';
import { useTransactions } from '../store/useTransactions';
import { Transaction } from '../types/Transaction';

const mockResponse = {
  data: [
    {
      refId: '123ABC',
      transferDate: '2024-10-15T12:34:56Z',
      recipientName: 'John Doe',
      transferName: 'Salary Payment',
      amount: 1500.0,
    },
    {
      refId: '456DEF',
      transferDate: '2024-09-21T09:12:45Z',
      recipientName: 'Jane Smith',
      transferName: 'Invoice Payment',
      amount: 2300.75,
    },
    {
      refId: '789GHI',
      transferDate: '2024-10-05T16:18:30Z',
      recipientName: 'Robert Brown',
      transferName: 'Refund',
      amount: -500.0,
    },
    {
      refId: '101JKL',
      transferDate: '2024-08-30T11:47:22Z',
      recipientName: 'Emily Davis',
      transferName: 'Bonus Payment',
      amount: 1200.0,
    },
  ],
};

const TransactionList: React.FC<any> = ({ navigation }) => {
  const { transactions, setTransactions } = useTransactions();

  useEffect(() => {
    setTransactions(mockResponse.data as Transaction[]);
  }, []);

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.refId}
        renderItem={({ item }) => (
          <TransactionItem
            transaction={item}
            onPress={() =>
              navigation.navigate('TransactionDetail', { transaction: item })
            }
          />
        )}
      />
    </View>
  );
};

export default TransactionList;
