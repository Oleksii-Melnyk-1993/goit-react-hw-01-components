import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.socialList}>
        <li className={css.socialItem}>
          <span>Followers </span>
          <span className={css.amount}>{followers}</span>
        </li>
        <li className={css.socialItem}>
          <span>Views </span>
          <span className={css.amount}>{views}</span>
        </li>
        <li className={css.socialItem}>
          <span>Likes </span>
          <span className={css.amount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.array.isRequired,
  location: PropTypes.array.isRequired,
  avatar: PropTypes.array.isRequired,
  followers: PropTypes.array.isRequired,
  views: PropTypes.array.isRequired,
  likes: PropTypes.array.isRequired,
};
