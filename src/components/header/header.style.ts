import styled from "styled-components";

export const NavigationItem = styled.li`
  list-style: none;

  & > a {
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    padding: 0.25em 0.75em;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;

      height: 2px;

      transition: all 300ms linear;

      background: ${({ theme }) => theme.colorLink};
    }

    &:hover:after {
      left: 0;
      right: 0;
    }
  }
`;
