import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-radius: 25px;
  border-bottom: 1px solid black;
background: rgb(71,10,23);
background: linear-gradient(90deg, rgba(71,10,23,1) 17%, rgba(0,1,3,1) 49%, rgba(66,16,16,0.9416141456582633) 77%);
  > nav {
    display: flex;
    
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: 500;
   border-radius: 25px;
  &.active {
    color: white;
  background: rgb(71,18,29);
background: linear-gradient(90deg, rgba(71,18,29,1) 0%, rgba(221,6,6,0.9416141456582633) 19%, rgba(96,4,4,1) 100%);
  }
`;

