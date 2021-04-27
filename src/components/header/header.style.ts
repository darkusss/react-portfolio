import styled from 'styled-components';
import { media } from '../../utils/helpers';
import { GlobalStyleProps } from '../../utils/types';

interface StyledHeaderProps {
    checked: boolean;
    open: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  nav {
    margin: 1.5em 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      width: 70%;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
    }
    
    button {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      width: 25px;
      height: 12px;
      display: none;
    }
    
    .burger {
      position: relative;
      width: 25px;
      height: 5px;
      background: ${({ theme }: GlobalStyleProps): string => theme.color};
      transform: ${({ open }): string | null =>
    open ? 'rotate(45deg) translateX(-31%)' : null};
      transition: all .3s ease;
      border-radius: 10px;
      
      &:before {
        content: '';
        position: absolute;
        top: -8px;
        left: 0;
        right: 0;
        height: 5px;
        background: ${({ theme }: GlobalStyleProps): string => theme.color}; 
        margin-left: ${({ open }): string => (open ? '100px' : '0')};
        transition: all .3s ease;
        border-radius: 10px;
      }
      
      &:after {
        content: '';
        position: absolute;
        transform: ${({ open }): string | null =>
    open ? 'rotate(90deg) translateX(-31%)' : null};
        bottom: -8px;
        left: 0;
        right: 0;
        height: 5px;
        background: ${({ theme }: GlobalStyleProps): string => theme.color}; 
        transition: all .3s ease;
        border-radius: 10px;
      }
    }
    
    label {
        display: inline-block;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        padding: 0;

        .switcher-container {
          width: 50px;
          height: 24px;
          box-shadow: 0px 0 10px rgba(0, 0, 0.5);
          padding: 0;
          border-radius: 30px;
          background-color: #0f1114;
          transition: all 200ms ease;
        }

        .image-container {
          position: absolute;
          width: 17px;
          height: 17px;
          left: 5px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          transition: opacity 200ms linear;
          opacity: ${(props): number => (props.checked ? 1 : 0.0)};

          img {
            max-width: 100%;
            margin: 0 0 1.75rem;
            padding: 0;
          }

          &:nth-child(2) {
            left: calc(100% - 21px);
            opacity: ${(props): number => (props.checked ? 0.0 : 1)};
          }
        }

        .switcher {
          position: absolute;
          width: 22px;
          height: 22px;
          background-color: #fafafa;
          top: 1px;
          left: 1px;
          border-radius: 50%;
          transition: all 0.5s;
          transform: ${(props): string => props.checked ? 'translateX(26px)' : 'translateX(0px)'};
        }

        input {
          position: absolute;
          visibility: hidden;
          margin: -1px;
          overflow: hidden;
          padding: 0;
        }
      }
  }
  
  ${media.tablet} {
    nav {
      flex-direction: column;
      
      > div {
        width: 100%;
        margin-bottom: 2rem;
      }
      
      ul {
        display: ${({ open }): string => (open ? 'flex' : 'none')};
        width: 100%;
        min-height: 100px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        li {
          margin-bottom: 2rem;
        }
      }
      
      button {
        display: block;
      }
    }
`;

export const NavigationItem = styled.li`
  list-style: none;
  margin-right: 2rem;

  & > a {
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
    padding: 0.25rem 1.75rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -5%;
      left: -5%;

      height: 10px;
      width: 10px;

      transition: all 400ms ease-in;

      border: 3px solid ${({ theme }: GlobalStyleProps): string => theme.colorLink};
      border-top: none;
      border-right: none;
    }

    &:hover:after {
      width: 100%;
      height: 0;
      left: 0;
    }

    &:before {
      content: "";
      position: absolute;
      right: -5%;
      top: -5%;

      height: 10px;
      width: 10px;

      transition: all 400ms ease-in;

      border: 3px solid ${({ theme }: GlobalStyleProps): string => theme.colorLink};
      border-bottom: none;
      border-left: none;
    }

    &:hover:before {
      width: 100%;
      height: 0;
      right: 0;
    }
  }
`;
