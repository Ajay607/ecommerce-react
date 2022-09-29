import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/Ajay-designstyle-candy-m.png' alt='logo' className='logo' />
      </NavLink>
      <Nav />
    </MainHeader>
  )
}

export default Header;

const MainHeader = styled.header`
  padding: 0 4.8rem;
  z-index: 9999;
  height: 10rem;
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: block;
    width: 105px;
  }
`;

