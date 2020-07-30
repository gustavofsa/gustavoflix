import styled from 'styled-components';

export const LogoImage = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 124px;
  }
`;

export const HeaderWrapper = styled.nav`
  width: 100%;
  height: 80px;

  position: fixed;
  top: 0;
  left: 0%;
  z-index: 9999;

  padding: 0 5% 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;
