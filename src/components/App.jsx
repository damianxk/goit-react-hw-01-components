import user from '../data/User.json';
import friend from '../data/FriendsList.json';
import statistics from '../data/Statistics.json';
import transactions from '../data/TransactionHistory.json';
import { User } from './User/User';
import { FriendsList } from './FriendsList/FriendsList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="app">
      <User {...user} />
      <Statistics statistic={statistics} />
      <FriendsList friends={friend} />
      <TransactionHistory transaction={transactions} />
    </div>
  );
};
