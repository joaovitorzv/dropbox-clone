import styled from 'styled-components';

import { FaDropbox } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  } 
`;


export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer; 
  }

  @media (min-width: 1024px) {
    > h1 {
      display: none;
    }
  }
`;


export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 32px;
    font-weight: bold;
  }
  > .subtitle {
    font-size: 14px;
    margin-top: 3px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    color: var(--color-quaternary);
    padding: 13px 18px;
    font-size: 16px;

    margin-top: 18px;

    &:focus {
      border: 1px solid var(--color-quaternary);
    }
  } 

  > button {
    margin-top: 18px;
    padding: 13px 18px;

    background-color: var(--color-blue);
    border: none;
    color: var(--color-tertiary);

    font-weight: 500;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }

  > .terms {
    margin-top: 5px;
    font-size: 14px;
    color: var(--color-border);
  }
`;