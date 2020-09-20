import styled from "styled-components";
import { FlexProps } from "../../utils/types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-flow: wrap ${({ reverse }): string => (reverse ? "row-reverse" : "")};
  flex-wrap: wrap;
  align-items: center;

  &:hover > div {
    color: ${({ theme }): string => theme.background};
    background: ${({ theme }): string => theme.color};
  }
`;

export const Circle = styled.div`
  display: inline-flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  margin: 0.5rem;
  transition: all 0.3s ease-out;

  & > p {
    max-width: 250px;
    text-align: center;
    margin: 0.25rem;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
`;
