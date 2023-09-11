import css from './FriendsList.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css['friends-list-item']}>
      <span
        className={isOnline ? css['status-online'] : css['status-offline']}
      ></span>
      <img className={css['friends-avatar']} src={avatar} alt="User avatar" />
      <p className={css['friends-name']}>{name}</p>
    </li>
  );
};
