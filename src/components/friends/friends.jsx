import PropTypes from 'prop-types';
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

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
