import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

import { QUERIES } from '../../constants';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  const onClickMobileBtn = () => setShowMobileMenu(true);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids Hello Hello</NavLink>
          <NavLink href="/collections">Collectionsdfadfda</NavLink>
        </Nav>
        <Side />
        <MobileBtns>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={onClickMobileBtn}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileBtns>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    min-width: min(375px, 100%);
    border-top: 4px solid var(--gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0px 48px;
  /* gap: clamp(16px, 5%, 48px); */
  /* gap: clamp(12px, 7%, 48px); */
  gap: clamp(12px, 4vw, 48px);

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;

  &:first-of-type {
    color: var(--secondary);
  }
`;

const MobileBtns = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    flex: 1;
    align-self: baseline;

    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    gap: clamp(20px, 1vw - 0.5rem, 100px);

    position: relative;
    top: 5px;

    min-width: min(140px, 100%);
  }
`;

export default Header;
