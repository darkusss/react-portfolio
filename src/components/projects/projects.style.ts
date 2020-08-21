import styled from 'styled-components';
import { media } from "../../utils/helpers";

export const StyledProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    .project {
        max-width: 300px;
        height: 200px;
        color: #fff;
        margin: .5rem 1rem;
    }
    
    .open-zone {
        position: relative;
        max-width: 100%;
        height: 100%;
        box-shadow: 2px 2px 13px rgba(0, 0, 0, .3);
        
        img {
            width: 100%;
        }
    }
    
    .open-zone:hover .close-zone {
        bottom: 0;
    }
    
    .close-zone {
        background-color: rgba(0, 0, 0, .5);
        overflow: hidden;

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 100%;

        display: flex;
        justify-content: center;
        flex-flow: nowrap column;
        align-items: center;

        transition: .5s ease;
        
        h3 {
            margin: 0 0 10px;
        }
        
        a {
            color: #fff;
        }
        
        .project-links {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            
            p {
                margin: 0;
            }
        }
    }
    
    ${media.tablet} {
        justify-content: center;
    }
`;