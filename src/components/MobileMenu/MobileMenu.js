/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlayWrapper
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContentWrapper
        style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
      >
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
  background-color: ${COLORS.transparentGray};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const DialogContentWrapper = styled(DialogContent)`
  background-color: ${COLORS.white};
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  margin: 0;
`

const UnstyledButtonWrapper = styled(UnstyledButton)`
  align-self: flex-end;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${COLORS.gray[900]};
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  &:hover {
    color: ${COLORS.secondary}; 
  }
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:active,
  &:hover {
    color: ${COLORS.secondary}; 
  }
`;

export default MobileMenu;
