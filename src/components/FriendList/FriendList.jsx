import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <FriendListItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
