import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../themes/utils/breakpointsMedia';

const FormWrapper = styled.div`
  width: 600px;
  ${breakpointsMedia({
    md: css`          
      width: 600px;
    `,
  })};

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: small;

    label {
      display:flex;
      flex-direction: column;
      color: ${(props) => props.theme.primary.color};
      font-weight: bold;
      margin-bottom: 1rem;

      input {
        width: 250px;
        height: 32px;      
        border: none;  
        border-radius: 3px;
      }
    }

    button {      
      background: ${(props) => props.theme.primary.btn_background};
      color: ${(props) => props.theme.primary.color};
      border: none;
      cursor: pointer;
      height: 49px;
      font-weight: bold;
      font-size: medium;
      border-radius: 3px;
      padding: 0 1rem;      
      margin-top: 1rem;
      width: 100%;

      ${breakpointsMedia({
    md: css`          
          width: 108px;
        `,
  })};      
    }

    button:hover {
      opacity: 0.9;
    }

  }
`;

export default FormWrapper;
