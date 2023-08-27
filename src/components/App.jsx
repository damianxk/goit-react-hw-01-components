import './App.css';
import user from './user/user.json';
import friend from './friends/friends.json';
import data from './data/data.json';
import transactions from './transactions/transactions.json';
import { Profile } from './user/user.jsx';
import { FriendsList } from './friends/friends.jsx';
import { Statistics } from './data/data.jsx';
import { TransactionHistory } from './transactions/transactions.jsx';

export const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics el={data} />
      <FriendsList el={friend} />
      <TransactionHistory el={transactions} />
    </div>
  );
};
