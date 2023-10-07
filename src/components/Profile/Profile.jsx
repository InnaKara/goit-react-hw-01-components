import PropTypes from 'prop-types';
import {
  UserWrapper,
  Avatar,
  Stats,
  ContainerStats,
  Name,
  Quantity,
  Label,
  TagAndLocation,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <UserWrapper>
    <div className="description">
      <Avatar src={avatar} alt={`${username} avatar`} className="avatar" />
      <Name>{username}</Name>
      <TagAndLocation>{`@ ${tag}`}</TagAndLocation>
      <TagAndLocation>{location}</TagAndLocation>
    </div>

    <Stats className="stats">
      <ContainerStats>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </ContainerStats>
      <ContainerStats>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </ContainerStats>
      <ContainerStats>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </ContainerStats>
    </Stats>
  </UserWrapper>
);
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
