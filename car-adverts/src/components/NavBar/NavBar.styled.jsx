import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* Mobile */
  /* Header */
  background-color: var(--primary-color);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container div {
    color: var(--text-light-color);
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .container nav ul {
    display: flex;
    list-style: none;
    margin: 0;
  }

  .container nav ul li {
    padding: 15px;
  }

  .container nav ul li a {
    color: var(--text-light-color);
    text-decoration: none;
  }

  .container nav ul li:hover {
    background: white;
    color: var(--primary-color);
  }

  .container nav ul li:hover a {
    color: var(--primary-color);
  }
`;
