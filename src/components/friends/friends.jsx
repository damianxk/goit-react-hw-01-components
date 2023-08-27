import './friends.css';

export const FriendsList = ({ el }) => {
  return (
    <ul className="friend-list">
      {el.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="friend-list-item" key={id}>
            <span
              className={isOnline ? 'status-online' : 'status-offline'}
            ></span>
            <img className="avatar-friend" src={avatar} alt={name} width="48" />
            <p className="name-friend">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
