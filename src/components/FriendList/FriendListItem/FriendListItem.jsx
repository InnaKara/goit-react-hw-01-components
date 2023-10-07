import { Status, WrapCard, AvatarFriend, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <WrapCard>
      <Status state={isOnline.toString()}></Status>
      <AvatarFriend src={avatar} alt={`${name} avatar`} width="48" />
      <Name>{name}</Name>
    </WrapCard>
  );
};
