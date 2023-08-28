export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends-list-item">
      <span className={isOnline ? 'status-online' : 'status-offline'}></span>
      <img className="friends-avatar" src={avatar} alt="User avatar" />
      <p className="friends-name">{name}</p>
    </li>
  );
};
