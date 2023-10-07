import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 350px;
  justify-content: center;
  text-align: center;
  height: 100%;
  border-radius: 8px;
  box-shadow: -1px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.06em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  height: 80px;
  width: 100%;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  flex-basis: calc((100%) / 5);
  height: 100%;
  gap: 15px;
`;
