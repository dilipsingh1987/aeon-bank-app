import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './src/screens/TransactionList';
import TransactionDetail from './src/screens/TransactionDetail';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TransactionList" component={TransactionList} options={{ title: 'Transactions' }} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
