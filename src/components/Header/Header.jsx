import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <HeaderWrapper as="header">
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup className="login">
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscriptionGroup>
        <Button>Subscribe</Button>
        <SubscriberLink href="#">Already a subscriber?</SubscriberLink>
      </SubscriptionGroup>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(MaxWidthWrapper)`
  padding: 0;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: baseline;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 80px;
    margin-top: 16px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: var(--color-white);

  @media ${QUERIES.laptopAndUp} {
    color: var(--color-offblack);
    background: var(--color-gray-100);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    padding: 0;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0;
    &.login {
      display: none;
    }
  }
`;

const SubscriptionGroup = styled(MaxWidthWrapper)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const SubscriberLink = styled.a`
  text-decoration: underline;
  font-family: var(--font-family-serif);
  color: var(--color-gray-900);
  font-weight: var(--font-weight-normal);
  font-size: 0.875rem;
  margin-top: 8px;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 48px;

  @media ${QUERIES.laptopAndUp} {
    flex: 3;
    margin: 0;
  }
`;

export default Header;
