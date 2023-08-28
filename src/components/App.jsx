import user from '../data/Profile.json';
import friend from '../data/FriendsList.json';
import statistics from '../data/Statistics.json';
import transactions from '../data/TransactionHistory.json';
import { Profile } from './Profile/Profile';
import { FriendsList } from './FriendsList/FriendsList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="app">
      <Profile {...user} />
      <Statistics statistic={statistics} />
      <FriendsList friends={friend} />
      <TransactionHistory transaction={transactions} />
    </div>
  );
};
