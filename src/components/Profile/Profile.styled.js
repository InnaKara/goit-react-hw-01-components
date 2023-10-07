import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 100%;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
export const Avatar = styled.img`
  margin: 0 auto;
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const TagAndLocation = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  gap: 40px;
`;
export const ContainerStats = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  &:hover {
    color: blue;
  }
`;
export const Label = styled.span`
  font-style: oblique;
  color: rgba(0, 0, 0, 0.5);
`;

export const Quantity = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
