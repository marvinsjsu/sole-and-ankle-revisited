/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { STYLES } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlayWrapper
      isOpen={isOpen}
      onDismiss={onDismiss}
      style={STYLES}
    >
      <DialogContentWrapper aria-label='mobile menu'>
        <UnstyledButtonWrapper onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </UnstyledButtonWrapper>
        <NavWrapper>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavWrapper>
        <FooterWrapper>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </FooterWrapper>
      </DialogContentWrapper>
    </DialogOverlayWrapper>
  );
};

const DialogOverlayWrapper = styled(DialogOverlay)`
  background-color: var(--transparent-gray);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
`;

const DialogContentWrapper = styled(DialogContent)`
  background-color: var(--white);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  margin: 0;
`

const UnstyledButtonWrapper = styled(UnstyledButton)`
  align-self: flex-end;

  &:hover {
    color: var(--secondary);
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  line-height: 1.2;
  color: var(--gray-900);
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  &:hover {
    color: var(--secondary); 
  }
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  font-weight: var(--font-weight-normal);
  line-height: 1.2;
  color: var(--gray-700);
  text-decoration: none;

  &:active,
  &:hover {
    color: var(--secondary); 
  }
`;

export default MobileMenu;
