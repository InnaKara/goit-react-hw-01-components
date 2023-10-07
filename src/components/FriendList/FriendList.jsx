import { FriendListItem } from './FriendListItem/FriendListItem';
import { Container } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </Container>
  );
};
