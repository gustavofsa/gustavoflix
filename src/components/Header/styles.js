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

export const ButtonLink = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 12px 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;

    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 0;

    text-align: center;
  }
`;
