import styled from "styled-components";

interface FlexProps {
    reverse?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-flow: wrap ${({reverse}): string => (reverse ? "row-reverse" : "")};
  align-items: center;
  border-radius: ${({reverse}): string =>
    reverse ? "0 150px 150px 0" : "150px 0 0 150px"};
`;

export const Circle = styled.div`
  display: inline-flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;

  border-radius: 50%;

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
