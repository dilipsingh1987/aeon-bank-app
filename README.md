# AEON Bank App

A React Native (Expo) demo application that displays a list of transactions and detailed transaction information. Built with **React Navigation** and **Zustand** for state management.

---

## 🚀 Features
- [Transaction list](ca://s?q=Transaction_list_screen_in_React_Native) with recipient, transfer type, date, and amount
- Color‑coded amounts (green for income, red for expense)
- [Transaction detail](ca://s?q=Transaction_detail_screen_in_React_Native) with reference ID, date/time, recipient, transfer type, and amount
- Share functionality to export transaction details
- [State management](ca://s?q=Zustand_state_management_in_React_Native) using Zustand

---

## 📂 Project Structure
aeon-bank-app/
App.tsx
/src
/components
TransactionItem.tsx
/screens
TransactionList.tsx
TransactionDetail.tsx
/store
useTransactions.ts
/types
Transaction.ts
/utils
formatDate.ts
