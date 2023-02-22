import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Position = styled.div`
  display: flex;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
      padding: 15px 20px 15px 15px;
      margin-bottom: 20px;
  border-radius: 25px;
  
  text-decoration: none;
  color: white;
  font-weight: 500;
  background: rgb(71,18,29);
background: linear-gradient(90deg, rgba(71,18,29,1) 0%, rgba(221,6,6,0.9416141456582633) 19%, rgba(96,4,4,1) 100%);
  &:hover {
    color: white;
    
  }
`;
export const Linka = styled(NavLink)`
  display: inline-block;
      padding: 20px 40px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  margin: 5px 8px 30px;
   background: rgb(71,18,29);
background: linear-gradient(90deg, rgba(71,18,29,1) 0%, rgba(221,6,6,0.9416141456582633) 19%, rgba(96,4,4,1) 100%);
  &.active {
    color: white;
    
  }
`;

export const Item = styled.li`
  display: inline-block;
  text-decoration: none;
  color: white;
  font-weight: 500;
`;

export const Img = styled.img`
  margin-right: 50px;
`;

// export const Btn = styled.button`
//   background-color: violet;
//   border-radius: 10px;
//   height: 40px;
//   border: none;
//   font-weight: 500;
//   color: white;
// `;
