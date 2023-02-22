import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
 
  column-count: 4;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
      flex-direction: column;
  &.active {
    color: white;
    background-color: violet;
  }
`;

export const Item = styled.li`
  text-decoration: none;
  color: black;
  font-weight: 500;
width:320px;
height:410px;
  &.active {
    color: white;
    background-color: violet;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
  width: 70%;
height: 320px;
`;

export const Text = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  color: inherit;
  height: 50px;
  max-width: 200px;
  padding: 12px;
    text-align: center;
  &:hover {
    color: violet;
  }
`;

export const Input = styled.input`
  height: 40px;
  margin-right: 20px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Btn = styled.button`
  background: rgb(71,18,29);
background: linear-gradient(90deg, rgba(71,18,29,1) 0%, rgba(221,6,6,0.9416141456582633) 19%, rgba(96,4,4,1) 100%);
  border-radius: 10px;
  height: 40px;
  border: none;
  font-weight: 500;
  color: white;
`;