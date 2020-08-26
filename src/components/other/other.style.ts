import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
`;

export const StyledButton = styled.button`
    background: #FFD07B;
    border: none;
    padding: .5rem 1.0rem;
    margin: 1rem 0;
    font-weight: 700;
    font-style: italic;
    cursor: pointer;
    transition: all .3s ease;
    
    
    &:hover {
        box-shadow: inset -2px -2px 2px 1px rgba(0,0,0,.3);
    }
`;