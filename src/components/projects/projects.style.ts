import styled from "styled-components";
import { media } from "../../utils/helpers";

export const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .project {
    display: flex;
    flex-flow: wrap column;

    min-width: 200px;
    max-width: 300px;

    border-radius: 1rem;
    margin: 1rem;

    background: #e2e2e2;
    color: #363537;

    box-shadow: 3px 3px 6px 4px hsla(5, 0%, 50%, 0.2);

    .project-image {
      width: 100%;

      border-radius: 1rem 1rem 0 0;
    }

    .project-content {
      margin: 1rem;
      .project-title {
        font-weight: 400;
      }

      .project-desc {
        font-weight: 300;
      }

      .project-skill {
          border: 1px solid #363537;
          border-radius: 10px;
          padding: .25rem;
          margin-right: .75rem;
      }

      .project-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        a {
          color: #363537;
        }
        
        img {
          width: 32px;
        }
      }
    }
  }
`;
