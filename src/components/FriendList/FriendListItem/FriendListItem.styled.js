import { styled } from 'styled-components';

export const WrapCard = styled.li`
  display: flex;
  width: 100%;
  position: relative;
  gap: 40px;

  box-shadow: -1px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 65px;
`;

export const AvatarFriend = styled.img`
  margin-left: 60px;
`;

export const Status = styled.span`
  display: block;
  position: absolute;
  top: 26px;
  left: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => {
    if (props.state === 'true') {
      return 'green';
    }
    return 'red';
  }};
`;

export const Name = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 25px;
  font-weight: 600;
`;
