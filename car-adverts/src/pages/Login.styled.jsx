import styled from 'styled-components';

export const StyledLogin = styled.main`
  /* Mobile */
  /* login.html */
  .container #signin,
  .container #signup {
    padding: 30px;
  }

  .container section h2 span {
    font-weight: 400;
  }

  .container #signup {
    margin-top: 35px;
  }

  /* Tablter */
  @media screen and (min-width: 1024px) {
    /*  */
    /* login.html */
    .container .forms-container {
      display: flex;
    }
    .container #signin,
    .container #signup {
      width: calc(100% / 2 - 30px);
      margin: 0 10px;
    }
  }
`;
